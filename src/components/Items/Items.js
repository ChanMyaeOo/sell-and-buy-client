import React from "react";
import { Grid } from "@material-ui/core";
import Item from "./Item/Item";
import useStyles from "./styles";

const Items = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.itemsGrid} >
                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap." />
                </Grid>

                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap. I have very delicious apples. It is also cheap."/>
                </Grid>

                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap. I have very delicious apples. It is also cheap. I have very delicious apples. It is also cheap"/>
                </Grid>

                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap."/>
                </Grid>

                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap."/>
                </Grid>

                <Grid item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                    <Item description="I have very delicious apples. It is also cheap. I have very delicious apples. It is also cheap."/>
                </Grid>

            </Grid>
        </div>
    );
};

export default Items;
