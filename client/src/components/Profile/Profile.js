
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import './Profile.css';



const Profile = () => {
	const dispatch = useDispatch(getUsers());

	const user = JSON.parse(localStorage.getItem('profile'));
	const allUsers = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts
	// console.log(user);

	const myInfo = allUsers.filter((oneUser) => {
		if (oneUser?.email === user?.result?.email) {
			return oneUser;
		}
		return null;
	})
	console.log(myInfo[0]);
	const userHere = myInfo[0];
	console.log(userHere);


// where to dispatch the action, inside useEffect
  useEffect(() => {

    dispatch(getUsers());
  }, [dispatch]); // dependency array





// console.log(userHere?.result?.selectedFile);
  return (
    	<div className="profile">
    		<div className="picture">
		
				<img className="profilePic" src={userHere?.selectedFile} alt="profile"/>
			</div>
			<div className="name">
				<h1>{userHere?.name}</h1>
			</div>

      		<div className="body">
    
    
				<h2 className="valueFields"> {userHere?.bio} </h2>
				<h2> Year: </h2>
					<h2 className="valueFields">{userHere?.year}</h2>
				<h2> Major: </h2>
				<h2 className="valueFields">{userHere?.major}</h2>
				 
				<h2>Hobbies:</h2> 
				<h2 className="valueFields">{userHere?.hobbies}</h2>

					
				<h2>Are you a cat person or a dog person?:</h2>
				<h2 className="valueFields"> {userHere?.catDog} </h2>
				<h2>Do you prefer to study in the morning or night?:</h2>
				<h2 className="valueFields">{userHere?.nightOrMorning} </h2>
        		<h2>Do you prefer to study in smaller or larger groups?: </h2>
				<h2 className="valueFields"> {userHere?.groupSize} </h2> 
        
	        </div>
    	</div>
   )
}

export default  Profile;
 

