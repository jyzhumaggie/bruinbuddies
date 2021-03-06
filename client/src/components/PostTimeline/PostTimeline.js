import React, { useEffect } from 'react';
import NewForm from '../NewForm/NewForm';
import Posts from '../Posts/Posts';

import { getPosts } from '../../actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from "./styles";
import { useDispatch } from 'react-redux';  //allow dispatch an action: HOOK

const PostTimeline = () => {
    const classes = useStyles();
    const dispatch = useDispatch(getPosts()); //hook
    
    // where to dispatch the action, inside useEffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]); // dependency array
    
    return (

        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="black">
                <Typography className={classes.heading} variant="h2" align="center">Feeds</Typography>
                {/* //text element */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <NewForm />
                        </Grid>
    
                    </Grid>
                </Container>
            </Grow>
        </Container>


    )
}

export default PostTimeline;

