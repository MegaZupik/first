import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (

        <div className={s.profile}>
        <ProfileInfo />
        <MyPosts
                    postsData={props.state.PostsData }
                    dispatch={props.dispatch}
                    newPostText={props.state.newPostText}
                     />
        </div>)
}
export default Profile;