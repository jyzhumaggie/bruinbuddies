import React, { useState, useEffect } from 'react';
import makeStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const PostForm = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: "", message: "", tags: "", selectedFile: "",});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ): null ); 

    const classes = makeStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clear();
    }
                                            
                                            
                                            if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h5" align="center" }}>
                     SIGN IN:
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({  title:'', message:'', tags:'', selectedFile:'' });
    }


   // if (!user?.result?.name) {
   //     return (
   //         <Paper className={classes.paper}>
  //              <Typography variant="h6" align="center" style={{ fontWeight: 'bolder' }}>
 //                   Please Sign In 
//                </Typography>
//            </Paper>
//        )
//    }

    return ( 
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
                <Typography variant="h6"> {currentId ? 'Editing' : 'Creating'} a post</Typography>
                    {/* <TextField name="creater" variant="outlined" label="Creater" fullWidth value={postData.creater} onChange={(e) => setPostData({ ...postData, creater: e.target.value })} /> */}
                    <TextField name="title" required variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="message" required variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name="tags" required variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            required
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
