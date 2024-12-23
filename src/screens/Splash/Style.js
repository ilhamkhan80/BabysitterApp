import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
viewstyle:{backgroundColor:Colors.Blue,flex:1},
imagestyle:{justifyContent:'center',flex:1,alignSelf:'center'},
viewtext:{alignSelf:'center'},
text:{color:Colors.White,fontSize:35,fontFamily:theme.REGULAR}
})
export default Styles