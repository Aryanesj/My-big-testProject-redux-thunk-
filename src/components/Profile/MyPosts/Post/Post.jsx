import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
         <div className={s.item}>
         <img src="https://i0.wp.com/7youtube.ru/wp-content/uploads/2017/01/dmdmdmddsaaaa.jpg" alt=""/>
         {props.message}
         <div>
         
            <span>{props.likesCount}</span>
         </div>
         </div>
	);
}

export default Post;