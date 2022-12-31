import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://cs14.pikabu.ru/post_img/2022/11/28/5/1669616969182636332.webp' alt="dfgdf" />
            </div>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;