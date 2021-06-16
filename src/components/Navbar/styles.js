import { makeStyles, fade } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#16252b"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: "30px",
        marginLeft: "20px",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "5px"
        }
    },
    appBar: {
        backgroundColor: "#16252b",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },  
    menu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    menuItem: {
        marginLeft: "60px",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "15px"
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(1),
            width: "40%",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default useStyles;