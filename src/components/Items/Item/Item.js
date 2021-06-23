import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Divider, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../actions/items'
import useStyles from './styles'

const Item = ({ item, setCurrentId }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const createdDate = moment(item.createdAt).format("MMM D, YYYY")
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleUpdate = () => {
        setAnchorEl(null);
        setCurrentId(item._id)
    }

    const handleDelete = () => {
        setAnchorEl(null);
        dispatch(deleteItem(item._id))
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} >R</Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.name}
                subheader={createdDate}
            />

            {/* For Menu Item (delete and update) */}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleUpdate}>Update</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>

            {/* Check image url (selectedFile) exists or not */}
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
