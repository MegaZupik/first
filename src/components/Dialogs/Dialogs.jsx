import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";






const Dialogs = (props) => {
    let state = props.DialogsPage;

    let dialogElements = state.Dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));


    let messageElements = state.Messages.map(m => (<Message key={m.id} id={m.id} message={m.message}/>));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =()=>{
    props.SendMessageClick();
    };
    let onNewMessageChange =(e)=>{

    let body=e.target.value;
    props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Navigate to={"/login"} /> ;


    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItems}>
                {dialogElements}
            </div>
            <div className={s.Messages}>
                {<div>{messageElements}</div>}
                <div><textarea value={newMessageBody} onChange={onNewMessageChange}  placeholder={'Enter Your Message'} ></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>

    )
}

export default Dialogs;