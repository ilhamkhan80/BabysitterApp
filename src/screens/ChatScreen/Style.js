import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    MyProfile:{padding:20},
    Profilestyle:{textAlign:'center',fontFamily:theme.BOLD,fontSize:22,color:Colors.purple,paddingTop:20},
    Plus:{height:52,width:60},
    Flex:{flexDirection:'row',alignItems:'center',marginTop:20},
    Textinput:{flexDirection:'row',alignItems:'center'},
    Arrow:{height:52,width:60},
    Textinputstyle:{backgroundColor:'white',width:253,height:52,borderRadius:12,},
    Girlimage:{height:15,width:15,borderRadius:40,marginLeft:10,marginTop:10},
    Chatstyle:{backgroundColor:Colors.Atfernoon,width:250,height:55,borderRadius:15,left:6},
    Loremtextstyle:{fontSize:12,fontFamily:theme.MEDIUM,marginLeft:20},
    Tickstyle:{width:13,height:8,marginLeft:10,marginTop:5},
    Timingviewstyle:{flexDirection:'row'},
    Timingstyle:{fontSize:10,marginLeft:5},
    Chatstyle2:{marginRight:20,backgroundColor:Colors.lightpurple,width:252,height:76,borderRadius:15,alignSelf:'flex-end'},
    Loremtextstyle1:{fontSize:12,fontFamily:theme.MEDIUM,marginLeft:20,color:Colors.White},
    Timingstyle1:{fontSize:10,marginLeft:5,alignSelf:'flex-end',marginRight:20},




})
export default Styles
