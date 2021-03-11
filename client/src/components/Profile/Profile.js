// import "./styles.css";
// import pic from './pic';
// import alt from './bruin';
// import { Platform, StyleSheet, View, Image } from 'react-native';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { getUsers, updateUser } from '../../actions/users';
// import image from './image.js'

//function pname()
//{
  
//}


const Profile = () => {
//  const classes = useStyles; // add styles later?
const dispatch = useDispatch(getUsers());
const [currentId, setCurrentId] = useState(null);

// where to dispatch the action, inside useEffect
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, currentId]); // dependency array

  return (
    <div className="profile" 
    style={{backgroundColor:'aliceblue'}}>
    
    <div className="picture">
      <h1> <br/> </h1>
    
      <img 
    //   alt={alt} src={pic}
    
          style={{width: 220, height: 300,
          borderRadius:1000}}
          />
    
      </div>
    
    
    
      <div className="name">
          <h1>Kaashif Mohsin
          </h1>
      </div>
    
    
    
      <div className="body">
    
    
          <h2 >Year: <br/> 
          Major: <br/> 
          Interests: <br/> 
          Classes: <br/> 
          Clubs/Organizations: <br/> 
    
    
          </h2>
          
    
    
    
      </div>
    
        </div>
    
  )

}

export default  Profile;
 
// export default function Profile() 
// {
 

  
//   return (

   
// <div className="profile" 
// style={{backgroundColor:'aliceblue'}}>

// <div className="picture">
//   <h1> <br/> </h1>

//   <img 
// //   alt={alt} src={pic}

//       style={{width: 220, height: 300,
//       borderRadius:1000}}
//       />

//   </div>



//   <div className="name">
//       <h1>Kaashif Mohsin
//       </h1>
//   </div>



//   <div className="body">


//       <h2 >Year: <br/> 
//       Major: <br/> 
//       Interests: <br/> 
//       Classes: <br/> 
//       Clubs/Organizations: <br/> 


//       </h2>
      



//   </div>

//     </div>
//   );
// }
