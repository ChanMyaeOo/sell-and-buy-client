import React, { useState } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createItem } from "../../actions/items";
import useStyles from "./styles";

const Form = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItem(item));
        clearForm();
    };

    const clearForm = () => {
        setItem({
            name: "",
            title: "",
            description: "",
            phnumber: "",
            location: "",
            selectedFile: "",
        });
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
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setItem({ ...item, selectedFile: base64 })
                                }
                                value="hello"
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
