import { StyleSheet } from 'react-native'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:Colors.bacckgroundcolor
    },
    Text: {
        fontSize: 20,
        color: Colors.purple,
        alignSelf: 'center',
        fontFamily: theme.BOLD,
    },
    View: {
        marginTop: 50,
        paddingTop: 60,
       
    },
    TextStyle: {
        color: Colors.Black,
        fontSize: 15,
    },
    ViewStyle: {
        padding: 10,
        margin: 10,
    },
    TextStyleCentered: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center'
    },
    

})
export default Styles