import React, { useState, useEffect } from 'react';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';

import { getPosts } from '../../actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from "./styles";
import { useDispatch } from 'react-redux';  //allow dispatch an action: HOOK



const PostTimeline = () => {
    const classes = useStyles();
    const dispatch = useDispatch(getPosts()); //hook
    
    const [currentId, setCurrentId] = useState(null);

    // where to dispatch the action, inside useEffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]); // dependency array
    
    
    return (

        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" >
                <Typography className={classes.heading} variant="h2" align="center">Posts</Typography>
                {/* //text element */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
    
                    </Grid>
                </Container>
            </Grow>
        </Container>


    )
}

export default PostTimeline;

