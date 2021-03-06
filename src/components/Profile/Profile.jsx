import React from 'react';
import ProfileInfo from './PrifileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';



const Profile = (props) => {
	return(
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer  />
		</div>
	)
}



export default Profile;