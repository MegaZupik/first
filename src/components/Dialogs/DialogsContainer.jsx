import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            SendMessageClick={onSendMessageClick}
                            DialogsPage={store.getState().DialogsPage}/>


        }
        }
    </StoreContext.Consumer>
}

let mapStateToProps =(state)=>{
    return{
DialogsPage:state.DialogsPage
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageBody:()=>{dispatch(updateNewMessageBodyCreator(body))},
        SendMessageClick:(body)=>{dispatch(sendMessageCreator());}

    }
}
const SuperDiaglogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
            export default DialogsContainer;