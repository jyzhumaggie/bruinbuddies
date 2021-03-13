
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getUsers } from '../../actions/users';
// import image from './image.js'
import './Profile.css';



const Profile = () => {
const dispatch = useDispatch(getUsers());
const [currentId, setCurrentId] = useState(null);

// where to dispatch the action, inside useEffect
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, currentId]); // dependency array
  const user = JSON.parse(localStorage.getItem('profile'));



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
		</div>
   )
}

export default  Profile;
 

