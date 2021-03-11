import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import makeStyles from './styles';

const SuggestedBox = ( suggestedUser ) => {
    const classes = makeStyles();

    console.log(suggestedUser);
    console.log(suggestedUser.suggestedUser?.name);
    const sUser = suggestedUser.suggestedUser;
    // console.log(sUser?.selectedFile);

    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user?.result?.email + ' is my name');

    // const addFriend = () => {
    //     if (user sUser?.result?.email)
    // }
    const Friending = () => {
        return <h5>ahha</h5>
    }
    console.log(sUser?.friends);

    return (
        <Card > 
            
            <CardContent >
                <CardMedia className={classes.media} image={sUser.selectedFile} title={sUser.name} />
                <Typography className={classes.title}>{sUser.name}</Typography>
                <Typography className={classes.message}>{sUser.bio}</Typography>
                <Typography className={classes.details}>{sUser.year}</Typography>
                <Typography className={classes.details}>{sUser.major}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" disabled={!sUser} onClick={()=> {}}>
                    {
                     !sUser?.friends.find((friend) => friend === user?.result?.email) && (
                         <Friending />
                     )
                    }
                </Button>
                
            </CardActions>
        </Card>
    )
}

export default SuggestedBox
