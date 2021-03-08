import React from 'react';
import makeStyles from './styles';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'; 
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { deletePost, likePost  } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay2}>
                <Button 
                    style={{color: "white"}}
                    size="small" 
                    onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent className={classes.cardContents}>
                <Typography className={classes.details}>{post.name}</Typography>
                <Typography className={classes.details2}>{moment(post.createdAt).fromNow()}</Typography>
                <Typography className={classes.title}>{post.title}</Typography>
                <Typography className={classes.message} >{post.message}</Typography>

                <Typography variant="body2" style={{color: "white"}}>{post.tags.map((tag) => `#${tag} `)}</Typography>

            </CardContent>


            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" onClick={()=> {dispatch(likePost(post._id))}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like&nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="secondary" onClick={()=> {dispatch(deletePost(post._id))}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>


        )
};

export default Post;