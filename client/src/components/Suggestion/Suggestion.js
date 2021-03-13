import React, { useState, useEffect } from 'react';
import './Suggestion.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import SuggestionBox from '../SuggestedBoxes/SuggestedBox';
import { Grid } from '@material-ui/core';
import makeStyles from './styles';





const Suggestion = () => {

    const classes = makeStyles();

    const dispatch = useDispatch(getUsers()); //hook

    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch, currentId]); // dependency array


    const user = JSON.parse(localStorage.getItem('profile'));

    const allUsers = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts


 
    console.log(allUsers);
    const otherUsers = allUsers.filter( (one) => {
        if (user?.result?.email === one?.email) {
            console.log("i am u");
            return null;
        } else { 
            return one;
        }
    } );

    const mee = allUsers.filter( (one) => {
        if (user?.result?.email === one?.email) {
            console.log(one);
            return one;
        }
    } );


    
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
 const groupSizeQuery = user?.result?.groupSize;
    const suggestUsersGroupSize = ( otherUsers, groupSizeQuery ) => {
        if (!groupSizeQuery) {
            return null;
        } else {
            return otherUsers.filter((oneUser) => {
                const match = oneUser?.groupSize?.toLowerCase();
                return match?.includes(groupSizeQuery?.toLowerCase());
            })
        }
    }
    const suggestedUsersGroupSize = suggestUsersGroupSize(otherUsers, groupSizeQuery);


console.log(suggestedUsersYear[0]?.name);
var array = [];
var arrayIndex = 0;
function element(profile, counter)
{
    return ([profile, counter]);
}
for(var i = 0; i < suggestedUsersMajor?.length; i++)
{
    array[arrayIndex] = element(suggestedUsersMajor[i], 1);
    arrayIndex++;
} 

for(var i = 0; i < suggestedUsersMajor?.length; i++)
{
    array[arrayIndex] = element(suggestedUsersMajor[i], 1);
    arrayIndex++;
}

console.log(array);

for(var i = 0; i < suggestedUsersYear?.length; i++)
{
    var didMatch = 0;
    for(var j = 0; j < array.length; j++)
    {
        if(suggestedUsersYear[i]?.name == array[j][0]?.name)
        {
            array[j][1]++;
            didMatch = 1;
            break;
        }
    }
    if(didMatch == 0)
    {
        array[arrayIndex] = element(suggestedUsersYear[i], 1);
        arrayIndex++;
    }
    
}
for(var i = 0; i < suggestedUsersPet?.length; i++)
{
    var didMatch = 0;
    for(var j = 0; j < array.length; j++)
    {
        if(suggestedUsersPet[i]?.name == array[j][0]?.name)
        {
            array[j][1]++;
            didMatch = 1;
            break;
        }
    }
    if(didMatch == 0)
    {
        array[arrayIndex] = element(suggestedUsersPet[i], 1);
        arrayIndex++;
    }
    
}
for(var i = 0; i < suggestedUsersStudyHour?.length; i++)
{
    var didMatch = 0;
    for(var j = 0; j < array.length; j++)
    {
        if(suggestedUsersStudyHour[i]?.name == array[j][0]?.name)
        {
            array[j][1]++;
            didMatch = 1;
            break;
        }
    }
    if(didMatch == 0)
    {
        array[arrayIndex] = element(suggestedUsersStudyHour[i], 1);
        arrayIndex++;
    }
    
}
for(var i = 0; i < suggestedUsersGroupSize?.length; i++)
{
    var didMatch = 0;
    for(var j = 0; j < array.length; j++)
    {
        if(suggestedUsersGroupSize[i]?.name == array[j][0]?.name)
        {
            array[j][1]++;
            didMatch = 1;
            break;
        }
    }
    if(didMatch == 0)
    {
        array[arrayIndex] = element(suggestedUsersGroupSize[i], 1);
        arrayIndex++;
    }
    
}
console.log(array);

var finalArray = [];
var finalArrayIndex = 0;
for(var i = 0; i < array.length; i++)
{
    if(array[i][1] >= 3)
    {
        finalArray[finalArrayIndex] = array[i][0];
        finalArrayIndex++;
    }
}

console.log(finalArray);

    return (
        <>
            <div>
                <p className="suggestionTitle"> Suggestions For You</p>


                <div className="suggestionDiv">
                    <p className="titleBoxes"> BEST MATCH </p>
                    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                    {
                        finalArray?.map((user) => (
                            <Grid key={user?._id} item sm={6}>
                                <SuggestionBox suggestedUser={user} />
                            </Grid>
                        ))
                    }
                    </Grid>
                </div>



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