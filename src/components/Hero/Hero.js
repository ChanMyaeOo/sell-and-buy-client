import React from 'react';
import { Typography, Button, Paper } from '@material-ui/core';
import useStyles from './styles';

const Hero = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.hero}>
            <Typography variant="h1" align="center" className={classes.heroTitle}>A place <br />where you can Sell or Buy things</Typography>
            <Button variant="contained" className={classes.heroButton}>Explore Now</Button>
        </Paper>
    )
}
export default Hero;