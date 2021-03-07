import './App.css';
// import { Component } from 'react';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/Home';
import SignupForm from './components/SignupLoginForm/Form';
import LoginForm from './components/SignupLoginForm/LoginForm';
import Suggestion from './components/Suggestion/Suggestion'
import UserNav from './components/NavBar/UserNav';


import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import PostTimeline from './components/PostTimeline/PostTimeline';
import Auth from './components/Auth/Auth';


function App() {
    return ( 
        <BrowserRouter >
            <div className = "App" >
                <Route path = "/(register|login|info|)" component = { Nav }/> 
                <Route path = "/(suggestion|personalinfo|posts)" component = { UserNav }/>
                
                <Switch >
                    <div>
                        <Route exact path = "/" component = { Home } /> 
                        <Route exact path = "/info" component = { Home }/> 
                        <Route exact path = "/register" component = { SignupForm }/> 
                        <Route exact path = "/login" component = { LoginForm } /> 
                        <Route exact path = '/suggestion' component = { Suggestion } /> 
                        <Route exact path = '/personalinfo' component = {PersonalInfo} />
                        <Route exact path = '/posts' component = {PostTimeline} />
                        <Route exact path = '/auth' component = {Auth} />
                    </div>
                </Switch> 
            </div> 


        </BrowserRouter>

    );
}

export default App;