import './App.css';
// import { Component } from 'react';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/Home';
// import SignupForm from './components/SignupLoginForm/Form';
// import LoginForm from './components/SignupLoginForm/LoginForm';
import Suggestion from './components/Suggestion/Suggestion'


import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PostTimeline from './components/PostTimeline/PostTimeline';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';


function App() {
    return ( 
        <BrowserRouter >
            <div className = "App" >
                {/* <Route path = "/(register|login|info|auth)" component = { Nav }/>  */}
                {/* <Route path = "/(suggestion|personalinfo|posts|auth)" component = { UserNav }/> */}
                <Nav />
                <Switch >
                    <>
                        <Route exact path = "/" component = { Home } /> 
                        {/* <Route exact path = "/register" component = { SignupForm }/> 
                        <Route exact path = "/login" component = { LoginForm } />  */}
                        <Route exact path = '/suggestion' component = { Suggestion } /> 
                        <Route exact path = '/personalinfo' component = {PersonalInfo} />
                        <Route exact path = '/posts' component = {PostTimeline} />
                        <Route exact path = '/auth' component = {Auth} />
                        <Route exact path = '/profile' component = {Profile} />
                    </>
                </Switch> 
            </div> 


        </BrowserRouter>

    );
}

export default App;