import { StyleSheet } from 'react-native'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
text:{fontSize:20,color:Colors.purple,alignSelf:'center',fontFamily:theme.BOLD},
view:{marginTop:20,paddingTop:20},
txtstyle:{alignSelf:'center',fontSize:14},
textstyle:{color:Colors.Black,fontSize:16},
viewstyle:{margin:10,paddingTop:13},
googlestyle:{alignSelf:'center',fontFamily:theme.BOLD,fontSize:14,margin:5,color:Colors.Black},
google:{flexDirection:'row',alignItems:'center',margin:8,justifyContent:'center',gap:9,borderWidth:1,padding:10,borderRadius:24,borderColor:Colors.purple,height:53,},
facebook:{flexDirection:'row',alignItems:'center',margin:8,justifyContent:'center',gap:9,padding:10,borderRadius:24,backgroundColor:Colors.fb,height:53},
textStyle:{marginTop:10,alignItems:'center',alignSelf:'center',flexDirection:'row',color:Colors.Black},
Login:{color:Colors.Blue,fontFamily:theme.BOLD},
buttonstyle:{ width: '90%',borderRadius:24,height:48 },
Buttonstyle:{    marginTop: 10, borderWidth: 1, borderColor: '#96A0A6', borderRadius: 12,flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', paddingHorizontal: 10,},
Inputstyle:{width:'85%',height:42,backgroundColor:'white',color:'black'} 
})
export default Styles
