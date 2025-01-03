import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: Colors.Blue,
        flex: 1,
    },
    ImageStyle: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center',
    },
    ViewText: {
        alignSelf: 'center',
    },
    Text: {
        color: Colors.White,
        fontSize: 35,
        fontFamily: theme.REGULAR,
    },

})
export default Styles