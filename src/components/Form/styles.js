import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fdfdfc",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "20px"
        }
    },
    form: {
        display: "flex",
        flexDirection: "column",
   
    },
    formTitle: {
        textAlign: "center",
        margin: "15px",
        fontSize: "20px",
        fontWeight: "500"
    },
    formFields: {
        margin: "8px 0px",
    }
}))

export default styles