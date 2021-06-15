import { makeStyles } from '@material-ui/core/styles'
import Image from '../../images/apples.jpg';

const styles = makeStyles((theme) => ({
    hero: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundPositionY: "16%",
        backgroundSize: "cover",
        width: "100%",
        height: 'calc(100vh - 65px)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    heroTitle: {
        fontSize: "70px",
        fontWeight: "bold",
        color: "#f2f2f2",
    },
    heroButton: {
        marginTop: "45px",
        fontWeight: "bold",
        padding: "10px",
        backgroundColor: "#16252b",
        color: "#f5f4f3",
        '&:hover': {
            color: "#16252b"
        }
    }
}))

export default styles;