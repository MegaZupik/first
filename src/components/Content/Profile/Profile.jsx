import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (

        <div className={s.profile}>
        <ProfileInfo />
 {/*       <MyPosts
                    postsData={props.state.PostsData }
                    dispatch={props.dispatch}
                    newPostText={props.state.newPostText}

                     />*/}
                     <MyPostsContainer/>
        </div>)
}
export default Profile;