
import {connect} from "react-redux";
import React from "react";
import getMatch from "../../redux/sidebar-reducer";
import SideBar from "./SideBar";


class SideBarContainer  extends React.Component {
    componentDidMount() {


    }

    render() {
        return<>
        <SideBar  />

        </>

    }
}

let mapStateToProps = (state) => {
    return {
        Matches: state.Matches
    }
}


export default connect(mapStateToProps, )(SideBarContainer);