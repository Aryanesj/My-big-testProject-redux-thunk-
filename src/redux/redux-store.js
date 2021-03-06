import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import UsersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
 
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: UsersReducer,
	auth: authReducer,
	form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;