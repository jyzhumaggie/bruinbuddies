// import "./styles.css";
// import pic from './pic';
// import alt from './bruin';
// import { Platform, StyleSheet, View, Image } from 'react-native';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getUsers, updateUser } from '../../actions/users';
// import image from './image.js'
import './Profile.css';


//change access to get hobbies separately
const Profile = () => {
const dispatch = useDispatch(getUsers());
const [currentId, setCurrentId] = useState(null);

// where to dispatch the action, inside useEffect
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, currentId]); // dependency array
  const user = JSON.parse(localStorage.getItem('profile'));
  const allUsers = useSelector((state) => state.posts);
  const thisUser = allUsers.filter( (one) => {
    if (user?.result?.email === one?.email) {
        console.log("i am u");
        return one;
    } else { 
        return null;
    }
} );

console.log(user?.result);

const userHere = user;
console.log(userHere.selectedFile);
  return (
	  <div>
    	<div className="profile">
    		<div className="picture">
		
				<img className="profilePic" src={userHere?.result?.selectedFile}/>
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
				
	//main changes in appearance check with console log
				<h2>Hobbies:</h2> 
				<h2 className="valueFields">{userHere?.result?.hobbies}</h2>

					
				<h2>Are you a dog person or a cat person?:</h2>
	
				<h2 className="valueFields"> {userHere?.result?.catDog} </h2>
	
	
	
				<h2>Do you prefer to study in the morning or night?:</h2>
				<h2 className="valueFields">{userHere?.result?.nightOrMorning} </h2>
        		<h2>Do you prefer to study in smaller or larger groups?: </h2>
				<h2 className="valueFields"> {userHere?.result?.groupSize} </h2> 
        
	        </div>
    	</div>
		</div>
   )
}

export default  Profile;
 

