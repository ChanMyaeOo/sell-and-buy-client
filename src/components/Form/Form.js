import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../actions/items";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [item, setItem] = useState({
        name: "",
        title: "",
        description: "",
        phnumber: "",
        location: "",
        selectedFile: "",
    });


    const itemToUpdate = useSelector(state => currentId ? state.items.items.find(item => item._id === currentId) : null)


    useEffect(() => {
        if (itemToUpdate) setItem(itemToUpdate)
    }, [itemToUpdate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateItem(currentId, { ...item }))
        } else {
            dispatch(createItem(item));
        }
        clearForm();
    };

    const clearForm = () => {
        setItem({
            name: "",
            title: "",
            description: "",
            phnumber: "",
            location: "",
        });
        setCurrentId(null)
    };
    return (
        <div>
            <Grid container className={classes.formContainer}>
                <Grid item>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Typography className={classes.formTitle}>
                            Creating item to Sell
                        </Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                            fullWidth
                            value={item.name}
                            onChange={(e) =>
                                setItem({ ...item, name: e.target.value })
                            }
                        />
                        <TextField
                            label="Title"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                            fullWidth
                            value={item.title}
                            onChange={(e) =>
                                setItem({ ...item, title: e.target.value })
                            }
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            className={classes.formFields}
                            value={item.description}
                            onChange={(e) =>
                                setItem({
                                    ...item,
                                    description: e.target.value,
                                })
                            }
                        />

                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                            value={item.phnumber}
                            onChange={(e) =>
                                setItem({ ...item, phnumber: e.target.value })
                            }
                        />
                        <TextField
                            label="Location"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                            value={item.location}
                            onChange={(e) =>
                                setItem({ ...item, location: e.target.value })
                            }
                        />

                        <div className={classes.formFields}>
                            <FileBase64
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setItem({ ...item, selectedFile: base64 })
                                }
                            />
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.formFields}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Form;
