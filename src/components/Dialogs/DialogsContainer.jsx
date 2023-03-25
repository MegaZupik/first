
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




let mapStateToProps =(state)=>{
    return{
DialogsPage:state.DialogsPage,
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body))},
        SendMessageClick:()=>{dispatch(sendMessageCreator());}

    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);