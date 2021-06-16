import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    itemsWrapper: {
        marginTop: "20px",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column-reverse"
        },
        padding: "0px 5px"
    }
}))
export default styles