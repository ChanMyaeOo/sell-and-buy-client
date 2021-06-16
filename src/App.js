import React from "react";
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Items from './components/Items/Items';
import Form from './components/Form/Form'
import useStyles from './styles'
import "./App.css";


const App = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Hero />
            <Grid container className={classes.itemsWrapper}>
                <Grid item lg={9} md={9} sm={8} xs={12}>
                    <Items />
                </Grid>
                <Grid item lg={3} md={3} sm={4} xs={12}>
                    <Form />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
