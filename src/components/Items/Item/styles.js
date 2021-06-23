import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: "90%",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    contentTitle: {
        fontSize: "25px",
    },
    contentDescription: {
        marginBottom: "7px"
    },
    phone: {
        display: "flex",
        margin: "10px 0px"
    },
    address: {
        display: "flex"
    },
    divider: {
        margin: "5px 0px"
    },
}));

export default styles;
