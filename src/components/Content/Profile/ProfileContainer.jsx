import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from "../../../redux/profile-reducer";
import axios from "axios";
import {
    useLocation,
    useNavigate,
    useParams,
    Navigate
} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 27519;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {

        if (!this.props.isAuth) return <Navigate to='/login' />

        return (
            <div>{console.log(this.props)}
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({

    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status

});
/*let WithUrlDataContainerComponent = withRouter(ProfileContainer);*/

export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);