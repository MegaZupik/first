import React from "react";
import Post from "../Post/post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";





const MyPosts =(props)=>{

    let newPostElement = React.createRef();

    let addpost =()=>{

        props.dispatch(addPostActionCreator());
    }

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action) ;
    }



    let postsElements = props.postsData.map(p=>(<Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>))
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
                    <button onClick={addpost}>Add post</button>
                </div>
                <div className={s.posts123}>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;