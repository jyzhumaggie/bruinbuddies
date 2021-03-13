import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';
import makeStyles from './styles';
// import './Nav.css';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Nav = () => {
    const classes = makeStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token]);


    const logout = () => {
        dispatch({ type: LOGOUT});
        history.push('/');
        setUser(null);
    }

    return (
        
        <>
        <AppBar className={classes.appBar}>
                <Link to='/' className={classes.heading}> BruinBuddies </Link>
                {user?.result ? (
                <>
                    <Link to='/personalinfo' className={classes.personalinfo}> MyInfo </Link>
                    <Link to='/posts' className={classes.posts}> Posts </Link>
                    <Link to='/search' className={classes.search}> Search </Link>
                    <Link to='/profile' className={classes.profilePage}> Profile </Link>
                    <Link to='/suggestion' className={classes.suggestions}> Suggestion </Link>
                    <div>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={logout}>
                            Log Out
                        </Button>
                    </div>
                </>
            ) : (
                
                <div>
                    <Button className={classes.button2} component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                </div>
            )}
        </AppBar>
        </>
    )
}

export default Nav
