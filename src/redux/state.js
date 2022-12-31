const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';
const SEND_MESSAGE123 ='SEND-MESSAGE';
/*export let addTestPost=()=>{
    store._state.ProfilePage.PostsData.push({id: '1', message: "Ubi est talis ausus?", likesCount: "15"});
    store._callSubscribers(store._state);
}*/

let store = {

    _state: {
        ProfilePage: {
            PostsData: [
                {id: '1', message: "Ubi est talis ausus?", likesCount: "15"},
                {id: '2', message: "Ho-ho-ho! urchin of madness?", likesCount: "125"},
                {id: '3', message: "Never rob a woodchuck?", likesCount: "515"},
                {id: '4', message: "Ho-ho-ho! death of punishment?", likesCount: "22"}
            ],
            newPostText: "random-text",
        },
        DialogsPage: {
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
            ]
        }
    },
    _callSubscribers() {
        console.log("fsdfsdfsdf")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribers = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0,
            };
            this._state.ProfilePage.PostsData.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscribers(this._state);
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscribers(this._state);
        }
    }

}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator =()=>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator =(bodyText)=>
    ({type:UPDATE_NEW_MESSAGE_BODY, bodyText:bodyText})


export default store;
window.store = store;