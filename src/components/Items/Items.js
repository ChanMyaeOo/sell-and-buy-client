import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../actions/items'
import Item from "./Item/Item";
import useStyles from "./styles";

const Items = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchItems = async () => {
            await dispatch(getItems())
        }

        fetchItems();
    }, [dispatch])


    const { items } = useSelector(state => state.items)
    console.log(items)
    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.itemsGrid} >
                {
                    items.length ? items.map(item => (
                        <Grid key={item._id} item xl={3} lg={4} md={4} sm={6} xs={12} className={classes.itemGrid} >
                            <Item item={item} />
                        </Grid>
                    )) : (
                        <div>Loading...</div>
                    )
                }


            </Grid>
        </div>
    );
};

export default Items;
