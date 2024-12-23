import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    View:{backgroundColor:Colors.White,flex:1},
    LikeBbabysitter:{marginTop:10,paddingTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'},
    likebabysitter:{padding:20,marginLeft:20,fontFamily:theme.BOLD,color:Colors.purple,fontSize:18},
    liststyle:{borderWidth:1,margin:10,borderRadius:12,borderColor:Colors.cream,backgroundColor:'white',padding:5},
    viewstyle :{flexDirection:'row',padding:10,marginLeft:10},
    Likebaby:{marginLeft:20,alignSelf:'flex-end'},
    Namestyle:{fontFamily:theme.BOLD,marginLeft:10},
    margin:{marginLeft:10}
})
export default Styles
