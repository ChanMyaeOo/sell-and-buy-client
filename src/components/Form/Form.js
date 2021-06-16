import React from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './styles'

const Form = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.formContainer}>
                <Grid item >
                    <form className={classes.form}>
                        <Typography className={classes.formTitle}>Creating item to Sell</Typography>
                        <TextField
                            label="Title"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            className={classes.formFields}
                        />
                        
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                        />
                        <TextField
                            label="Location"
                            variant="outlined"
                            type="text"
                            className={classes.formFields}
                        />

                        <div className={classes.formFields}>
                            <FileBase type="file" multiple={false} />
                        </div>

                        <Button variant="contained" color="primary" className={classes.formFields}>Submit</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Form;
