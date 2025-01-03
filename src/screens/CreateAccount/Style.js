import { StyleSheet } from 'react-native'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: Colors.purple,
        alignSelf: 'center',
        fontFamily: theme.BOLD,
    },
    view: {
        marginTop: 20,
        paddingTop: 20,
    },
    txtStyle: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight:400
    },
    textStyle: {
        color: Colors.Black,
        fontSize: 16,
    },
    viewStyle: {
        margin: 10,
        paddingTop: 13,
    },
    googleStyle: {
        alignSelf: 'center',
        fontSize: 14,
        margin: 5,
        color: Colors.Black,
    },
    google: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        justifyContent: 'center',
        gap: 9,
        borderWidth: 1,
        padding: 10,
        borderRadius: 24,
        borderColor: Colors.purple,
        height: 52,
        width: 340,

    },
    facebook: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        justifyContent: 'center',
        gap: 9,
        padding: 10,
        borderRadius: 24,
        backgroundColor: Colors.fb,
        height: 52,
        width: 340,

        
    },
    textStyleAlt: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        color: Colors.Black,
    },
    Login: {
        color: Colors.Blue,
        fontFamily: theme.BOLD,
    },
    buttonStyle: {
        width: 340,
        borderRadius: 24,
        height: 48,
    },
    ButtonStyleAlt: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#0000001A',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        
        
    },
    InputStyle: {
        height: 42,
        backgroundColor: 'white',
        color: 'black',
       
       
    },
    
})
export default Styles
