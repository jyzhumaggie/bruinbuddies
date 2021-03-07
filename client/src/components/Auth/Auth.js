import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import makeStyles from './styles';
import Input from './Input';

import { useDispatch } from 'react-redux'
import Icon from './Icon';
import { GoogleLogin } from 'react-google-login';
const Auth = () => {
    const classes = makeStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)
    
    const dispatch = useDispatch();

    const handleSubmit = () => {

    };
    const handleChange = () => {

    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);


    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj; //optional chaining operator
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token }});
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in unsuccessful");
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={5}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleSubmit={handleChange} type="password" />}

                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? "Sign Up" : "Sign In" }
                    </Button>
                    <GoogleLogin
                        clientId="740667578235-m2lnhg9v5mjslirmk308pmpllfin50ep.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disable={renderProps.disabled} 
                                startIcon={<Icon />} 
                                variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? "Already have an account? Sign in!" : "Don't have an account? Sign up!" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>


       
    );
};

export default Auth
