import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from "@material-ui/core";

// How to fetch all the post from the global redux store for display?
import { useSelector } from 'react-redux';


import makeStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts
    const classes = makeStyles();

    console.log(posts);
    return ( 
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={4}>
                {/* JS logic */}
                {posts.map((post) => (
                        <Grid key={post._id} item sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
            </Grid>
        )
    );
};

export default Posts;