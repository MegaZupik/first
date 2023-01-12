const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



let initialState = {
    PostsData: [
        {id: '1', message: "Ubi est talis ausus?", likesCount: "15"},
        {id: '2', message: "Ho-ho-ho! urchin of madness?", likesCount: "125"},
        {id: '3', message: "Never rob a woodchuck?", likesCount: "515"},
        {id: '4', message: "Ho-ho-ho! death of punishment?", likesCount: "22"}
    ],
    newPostText: "random-text",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.PostsData.push(newPost);
            state.newPostText = '';
            return state;
         case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
             default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;