import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import makeStyles from './styles';

const SuggestedBox = ( suggestedUser ) => {
    const classes = makeStyles();
    const user = suggestedUser.suggestedUser;
    
    return (
        <Card > 
            
            <CardContent >
                <CardMedia className={classes.media} image={user.selectedFile} title={user.name} />
                <Typography className={classes.title}>{user.name}</Typography>
                <Typography className={classes.message}>{user.bio}</Typography>
                <Typography className={classes.details}>{user.year}</Typography>
                <Typography className={classes.details}>{user.major}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" disabled={!user} onClick={()=> {}}>
                        Add Friends
                </Button>
                
            </CardActions>
        </Card>
    )
}

export default SuggestedBox
