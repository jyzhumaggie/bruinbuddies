import React, { useState } from 'react';
import makeStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const NewForm = () => {
    const [postData, setPostData] = useState({
        creater: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const classes = makeStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return ( 
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating new post</Typography>
                    <TextField name="creater" variant="outlined" label="Creater" fullWidth value={postData.creater} onChange={(e) => setPostData({ ...postData, creater: e.target.value })} />
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                            />
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                            <Button variant="contained" color="small" size="large" onClick={clear} fullWidth>Clear</Button>
                    </div>
            </form>
        </Paper>
    );
};

export default NewForm;