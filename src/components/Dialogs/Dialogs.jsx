import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogElements = props.state.Dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));


    let message = props.state.Messages.map(m => {
        return <Message key={m.id} id={m.id} message={m.message}/>
    });

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItems}>
                {dialogElements}
            </div>
            <div className={s.Messages}>
                {message}
            </div>
        </div>

    )
}

export default Dialogs;