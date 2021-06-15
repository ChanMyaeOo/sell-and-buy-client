import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menu}>
                        <Typography variant="h6" className={classes.title}>
                            S&#38;B
                        </Typography>
                        <Typography
                            color="inherit"
                            className={classes.menuItem}
                        >
                            About
                        </Typography>
                        <Typography
                            color="inherit"
                            className={classes.menuItem}
                        >
                            Login
                        </Typography>
                    </div>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
