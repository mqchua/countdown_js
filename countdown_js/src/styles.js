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
        minWidth:102.27,
        maxWidth:102.27,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        
    },
    timeNumber: {
        fontSize:28,
        fontWeight:"bold",
        paddingBottom:5,
    },
    timeWords: {
        fontSize: 14,
        // fontWeight:"bold",
    }

}));