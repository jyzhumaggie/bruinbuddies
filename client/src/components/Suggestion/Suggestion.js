import React, { useState, useEffect } from 'react';
import './Suggestion.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import SuggestionBox from '../SuggestedBoxes/SuggestedBox';
import { Grid } from '@material-ui/core';
import makeStyles from './styles';

function Person(name, major, description, url){
  return(
    [name, major, description, url]
  );

}

const array =  [Person("Kaashif", "idk tbh woops", "Kaash is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/139449275_788202815121563_8963311905750488388_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=MaAWVg1HD4IAX-Pyttp&_nc_ht=scontent-lax3-1.xx&oh=fd29c6eee99e5f24adcfd2629fde3bc9&oe=6064C78F"),
    Person("Harish","EE I think", "Harish is the boy", ""),
    Person("Maggie","CS...?", "Maggie is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/150641135_1063597977455164_6185899755448648920_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=C9apAITBuEoAX-0DUjL&_nc_ht=scontent-lax3-1.xx&oh=29a44e4f4495ff9f7d4a1c1f69161022&oe=60661428"),
    Person("Hiya","CS for sure", "Hiya is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/85121836_4207343742624332_1248352598432415744_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=OySVCoJuzxQAX-NTmjC&_nc_ht=scontent-lax3-1.xx&oh=40af81315ce3602f837d83c0b467f0c4&oe=6064730B"),
    Person("Jacob","CS for idk how much longer", "Jacob is the boy", "https://cdn.morganhilltimes.com/2019/10/JamesLemos.jpg")];


function Tracker(pos){
        if((array.length - pos) === 1)
        {
            return([pos, 0 , 1]);
        }
        else if((array.length - pos) === 2)
        {
            return([pos, pos+1, 0]);
        }
        else{
            return ([pos, pos+1, pos+2]);
        }
}

    

// where to dispatch the action, inside useEffect





const Suggestion = () => {

    const classes = makeStyles();

    const dispatch = useDispatch(getUsers()); //hook

    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch, currentId]); // dependency array


    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user?.result?.name);
    console.log(user);
    const allUsers = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts
    // console.log(allUsers);


 
    console.log(allUsers);
    const otherUsers = allUsers.filter( (one) => {
        if (user?.result?.email === one?.email) {
            console.log("i am u");
            return null;
        } else { 
            return one;
        }
    } );
    // console.log(otherUsers);

    const mee = allUsers.filter( (one) => {
        if (user?.result?.email === one?.email) {
            console.log(one);
            return one;
        }
    } );
    // console.log(userHere);
    // console.log("Here");
    // console.log(meee[0]);
    const userHere = mee[0];
 /*------------------------filters--------------------------*/
    const majorQuery = userHere?.major;
    console.log(majorQuery); 
    const suggestUsersMajor = ( otherUsers, majorQuery ) => {
        if (!majorQuery) {
            return null;
        } else {
            // console.log()
            return otherUsers.filter((oneUser) => {
                console.log(oneUser);
                const match = oneUser?.major?.toLowerCase();
                return match.includes(majorQuery?.toLowerCase());
            })
        }
    }
    const suggestedUsersMajor = suggestUsersMajor(otherUsers, majorQuery);
    console.log(suggestedUsersMajor);




 
    const yearQuery = user?.result?.year;
    const suggestUsersYear = ( otherUsers, yearQuery ) => {
        if (!yearQuery) {
            return null;
        } else {
            return otherUsers.filter((oneUser) => {
                const match = oneUser?.year?.toLowerCase();
                return match.includes(yearQuery?.toLowerCase());
            })
        }
    }
    const suggestedUsersYear = suggestUsersYear(otherUsers, yearQuery);

    const petQuery = user?.result?.catDog;
    const suggestUsersPet = ( otherUsers, petQuery ) => {
        if (!petQuery) {
            return null;
        } else {
            return otherUsers.filter((oneUser) => {
                const match = oneUser?.catDog?.toLowerCase();
                return match.includes(petQuery?.toLowerCase());
            })
        }
    }
    const suggestedUsersPet = suggestUsersPet(otherUsers, petQuery);

    const studyHourQuery = user?.result?.catDog;
    const suggestUsersStudyHour = ( otherUsers, studyHourQuery ) => {
        if (!studyHourQuery) {
            return null;
        } else {
            return otherUsers.filter((oneUser) => {
                const match = oneUser?.catDog?.toLowerCase();
                return match.includes(studyHourQuery?.toLowerCase());
            })
        }
    }
    const suggestedUsersStudyHour = suggestUsersStudyHour(otherUsers, studyHourQuery);
 /*------------------------filters--------------------------*/





    return (
        <>
            <div>
                <p className="suggestionTitle"> Suggestions For You</p>

                <div className="suggestionDiv">
                    <p className="titleBoxes"> Same Major</p>
                    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                    {
                        suggestedUsersMajor?.map((suggestedUserMajor) => (
                            <Grid key={suggestedUserMajor?._id} item sm={6}>
                                <SuggestionBox suggestedUser={suggestedUserMajor} />
                            </Grid>
                        ))
                    }
                    </Grid>
                </div>
                <div className="suggestionDiv">
                    <p className="titleBoxes"> Same Year </p>
                    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                        {
                            suggestedUsersYear?.map((suggestedUserYear) => (
                                <Grid key={suggestedUserYear._id} item sm={6}>
                                    <SuggestionBox suggestedUser={suggestedUserYear} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div> 
                <div className="suggestionDiv">
                    <p className="titleBoxes"> Pet </p>
                    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                        {
                            suggestedUsersPet?.map((suggestedUserPet) => (
                                <Grid key={suggestedUserPet._id} item sm={6}>
                                    <SuggestionBox suggestedUser={suggestedUserPet} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div> 
                <div className="suggestionDiv">
                    <p className="titleBoxes"> Study Time Preference </p>
                    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                        {
                            suggestedUsersStudyHour?.map((suggestedUserStudyHour) => (
                                <Grid key={suggestedUserStudyHour._id} item sm={6}>
                                    <SuggestionBox suggestedUser={suggestedUserStudyHour} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div> 
            </div>
        </>
    )
}




export default Suggestion









