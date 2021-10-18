import {usersAPI} from '../api/api.js';
import {profileAPI} from '../api/api.js';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It`s my first post', likesCount: 12},
        {id: 3, message: 'It`s my two post', likesCount: 33}
        ],
      profile: null,
      status: '',
};

const profileReducer = (state = initialState, action) => {

switch(action.type) {
	case 'ADD-POST':
	let newPost= {
    id: 4,
    message: action.newPostText,
    likesCount: 12,
  };

  let stateCopy = {...state};
  stateCopy.posts = [...state.posts];
  stateCopy.posts.push(newPost);
  stateCopy.newPostText = '';
  return stateCopy;


  case 'SET_USER_PROFILE': {
    return {...state, profile: action.profile};
  }

    case 'SET_STATUS': {
    return {...state, status: action.status};
  }

		default: 
		return state;
	}
}


export const addPostActionCreator = (newPostText) => ({type: 'ADD-POST', newPostText});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});


//Thunk
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
      });
};


export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
      });
};


export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
      });
};


export default profileReducer;