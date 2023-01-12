const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


    let initialState = {
        Messages: [
            {id: 1, message: "This beauty has only been controlled by an extraterrestrial space."},
            {id: 2, message: "This faith has only been raised by a unrelated phenomenan."},
            {id: 3, message: "This voyage has only been outweighed by a colorful space."},
            {id: 4, message: "Cum lapsus messis, omnes danistaes experientia noster, dexter caculaes. ."},
            {id: 5, message: "The skull commands with yellow fever, crush the quarter-deck until it laughs."},
            {id: 6, message: "You have to convert, and fear peace by your balancing."}
        ],
        Dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Misha"},
            {id: 3, name: "Lena"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Alina"},
            {id: 6, name: "Sveta"}
        ],
        newMessageBody: '',
    };

    const dialogsReducer=(state = initialState, action)=>{
    switch (action.type)
    {case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.Messages.push({id: 7, message: body})
            return state;
        default: return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;