import dialogsReducer from './dialogs-reducer.js';
import profileReducer from './profile-reducer.js';
import sidebarReducer from './sidebar-reducer.js';


let store = {
   _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It`s my first post', likesCount: 12},
        {id: 3, message: 'It`s my two post', likesCount: 33}
        ],
      newPostText: 'Arti is gone.',
},
    dialogsPage: {
      messages: [
        {id: 1, message: 'Czesc!'},
        {id: 2, message: 'Jak sie mash'},
        {id: 3, message: 'Co ty na to'},
        {id: 4, message: 'Dobra robota!'},
        {id: 5, message: 'Milego dnia.'},
        ],
        dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dawid'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Grzegosh'},
        {id: 5, name: 'Vilalij'},
        {id: 6, name: 'Artur'},
        ],
        newMessageBody: '',
  },
    sidebar : {},
},

getState() {
  return this._state;
},

_callSubscriber() {
  console.log('State changed');
},

subscribe(observer) {
  this._callSubscriber = observer;
},

dispatch(action) {  // { type: 'ADD-POST'}

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
this._state.sidebar = sidebarReducer(this._state.sidebar, action);

this._callSubscriber(this._state);

  }
}

window.store = store;
export default store;