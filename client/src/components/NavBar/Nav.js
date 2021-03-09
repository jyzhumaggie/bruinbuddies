import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import makeStyles from './styles';
import './Nav.css';
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
    }, [location]);


    const logout = () => {
        dispatch({ type: LOGOUT});
        history.push('/');
        setUser(null);
    }

    return (
        <nav>
            <ul>
                <li className="bruinBuddiesIcon">
                    <Link to="/">BruinBuddies</Link>
                </li>
            </ul>       
            {user?.result ? (
                <>
                    <ul className="links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Friends</Link>
                        </li>
                        <li>
                            <Link to="/personalinfo">MyInfo</Link>
                        </li>
                        <li>
                            <Link to="/myinfo">MySpace</Link>
                        </li>
                        
                    </ul>
                    <div className="fixedButton1">
                        <Button variant="contained" color="secondary" onClick={logout}>
                            Log Out
                        </Button>
                    </div>
                </>
            ) : (
                <div className="fixedButton2">
                    <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                </div>
            )}
        </nav>
    )
}

export default Nav
