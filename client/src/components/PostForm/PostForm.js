import React, { useState, useEffect } from 'react';
import makeStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const PostForm = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creater: "", title: "", message: "", tags: "", selectedFile: "",});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ): null ); 

    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
            
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creater: '', title:'', message:'', tags:'', selectedFile:'' });
    }

    return ( 
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
                <Typography variant="h6"> {currentId ? 'Editing' : 'Creating'} a post</Typography>
                    <TextField name="creater" variant="outlined" label="Creater" fullWidth value={postData.creater} onChange={(e) => setPostData({ ...postData, creater: e.target.value })} />
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                            />
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                            <Button variant="contained"  size="large" onClick={clear} fullWidth>Clear</Button>
                    </div>
            </form>
        </Paper>
    );
};

export default PostForm;