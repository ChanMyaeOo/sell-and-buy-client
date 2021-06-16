import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Divider } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import Image from '../../../images/apples.jpg'
import useStyles from './styles'

const Item = ({ description }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} >R</Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Ronaldo"
                subheader="June 16, 2021"
            />
            <CardMedia
                className={classes.media}
                image={Image}
            />
            
            <CardContent>
                <Typography variant="h1" className={classes.contentTitle}>Apples</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.contentDescription}>{description}</Typography>
                <Typography className={classes.phone} ><PhoneAndroidIcon color="primary"/> 09976543871</Typography>
                <Typography className={classes.address}><HomeIcon color="primary"/> Mandalay</Typography>
            </CardContent>
        </Card>
    )
}

export default Item
