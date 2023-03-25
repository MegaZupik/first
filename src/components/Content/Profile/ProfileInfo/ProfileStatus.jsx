import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status
    }

    activateEditMode=()=> {
        this.setState( {
            editMode: true
        } );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    deactivateEditMode=() =>{
        this.setState( {
            editMode: false
        } );
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>

                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>

                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;