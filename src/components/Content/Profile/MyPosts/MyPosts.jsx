import React from "react";
import Post from "../Post/post";
import s from "./MyPosts.module.css";







const MyPosts =(props)=>{


    let postsElements = props.PostsData.map(item=>(<Post key={item.id} message={item.message} likesCount={item.likesCount} id={item.id}/>))

    let newPostElement = React.createRef();

    let onAddPost =()=>{
        props.addPost();
    }

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }



    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;