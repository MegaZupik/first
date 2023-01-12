import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";



const MyPostsContainer =()=>{
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                let state = store.getState();



    let AddPost =()=>{
        store.dispatch(addPostActionCreator());
    }

    let onPostChange =(text)=>{
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
    }


   return <MyPosts
            updateNewPostText = {onPostChange}
            addPost={AddPost}
            newPostText={state.ProfilePage.newPostText}
            PostsData={state.ProfilePage.PostsData}
    />
}}
</StoreContext.Consumer>)
}
export default MyPostsContainer;