import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators.js';
import {Textarea} from '../../../components/common/FormsControls/FormsControls.js'

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
                <div>
                    <Field name='newPostText' 
                           component={Textarea} 
                           placeholder={'Post message'}
                           validate={[required, maxLength10]} 
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
          </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

let postsElements = props.posts
.map( (post) => <Post message={post.message} likesCount={post.likesCount} /> );


let newPostElement = React.createRef();

/* New post of state js*/
let onAddPost = (values) => {
    props.addPost(values.newPostText);
}


    return (
    <div className={s.postsBlock}>
    <h3>My posts</h3>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
            { postsElements }
        </div>
</div>
    );
   }



export default MyPosts;