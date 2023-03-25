
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";


/*const MyPostsContainer =()=>{
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
}*/
const mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        PostsData: state.ProfilePage.PostsData
    }
}
const mapDispatchToProps = (dispatch) => ({

        addPost: () => (dispatch(addPostActionCreator())),
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        
    }
})
    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

    export default MyPostsContainer;