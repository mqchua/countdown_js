import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        borderStyle:"solid",
        borderColor:"black",
    },
    timeBox: {
        backgroundColor:"#90caf9",
        color:"black",
        borderColor:"#ffccbc",
        borderStyle:"solid",
        justifyContent:'center',
        padding:20,
        margin:20,
        maxWidth:83.64,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        
    },
}));