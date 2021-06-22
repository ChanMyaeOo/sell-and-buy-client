import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Divider } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles'

const Item = ({ item }) => {
    const classes = useStyles();
    const createdDate = moment(item.createdAt).format("MMM D, YYYY")
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
                title={item.name}
                subheader={createdDate}
            />
            {
                item.selectedFile ? (
                    <CardMedia
                        className={classes.media}
                        image={item?.selectedFile}
                        alt={item.title}
                    />
                ) : (
                    null
                )
            }


            <CardContent>
                <Typography variant="h1" className={classes.contentTitle}>{item.title}</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.contentDescription}>{item.description}</Typography>
                <Typography className={classes.phone} ><PhoneAndroidIcon color="primary" />{item.phnumber}</Typography>
                <Typography className={classes.address}><HomeIcon color="primary" />{item.location}</Typography>
            </CardContent>
        </Card>
    )
}

export default Item
