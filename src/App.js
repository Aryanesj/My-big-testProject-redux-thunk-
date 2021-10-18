import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import Login from './components/Login/login.jsx';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar /> 
      <div className="app-wrapper-content">

           <Route path='/dialogs' 
                 render={ () => <DialogsContainer /> } />

          <Route path='/profile/:userId?'
                 render={ () => <ProfileContainer /> } />

          <Route path='/users' 
                 render={ () => <UsersContainer /> } />

          <Route path='/login' 
                 render={ () => <Login /> } />

      </div>
  </div>
</BrowserRouter>
);
}

export default App;
