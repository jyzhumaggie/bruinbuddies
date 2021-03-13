
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { getUsers } from '../../actions/users';
import './Profile.css';



const Profile = () => {
const dispatch = useDispatch(getUsers());

const user = JSON.parse(localStorage.getItem('profile'));

console.log(user);
// where to dispatch the action, inside useEffect
  useEffect(() => {

    dispatch(getUsers());
  }, [dispatch]); // dependency array



const userHere = user;

// console.log(userHere?.result?.selectedFile);
  return (
    	<div className="profile">
    		<div className="picture">
		
				<img className="profilePic" src={userHere?.result?.selectedFile} alt="profile"/>
			</div>
			<div className="name">
				<h1>{userHere?.result?.name}</h1>
			</div>

      		<div className="body">
    
    
				<h2 className="valueFields"> {userHere?.result?.bio} </h2>
				<h2> Year: </h2>
					<h2 className="valueFields">{userHere?.result?.year}</h2>
				<h2> Major: </h2>
				<h2 className="valueFields">{userHere?.result?.major}</h2>
				 
				<h2>Hobbies:</h2> 
				<h2 className="valueFields">{userHere?.result?.hobbies}</h2>

					
				<h2>Are you a cat person or a dog person?:</h2>
				<h2 className="valueFields"> {userHere?.result?.catDog} </h2>
				<h2>Do you prefer to study in the morning or night?:</h2>
				<h2 className="valueFields">{userHere?.result?.nightOrMorning} </h2>
        		<h2>Do you prefer to study in smaller or larger groups?: </h2>
				<h2 className="valueFields"> {userHere?.result?.groupSize} </h2> 
        
	        </div>
    	</div>
   )
}

export default  Profile;
 

