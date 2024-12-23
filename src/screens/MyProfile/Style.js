import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyProfile from './Index'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'



const Styles = StyleSheet.create({
Bell:{ alignSelf: 'flex-start',position:'absolute',right:10,marginTop:20},
MyProfile:{padding:20},
Profilestyle:{textAlign:'center',fontFamily:theme.BOLD,fontSize:22,color:Colors.purple,paddingTop:20},
Image:{borderRadius:60,alignSelf:'center',height:110,width:110},
Anaholmes:{textAlign:'center',fontFamily:theme.MEDIUM,fontSize:24,color:Colors.purple},
Iconstyle:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
Gmailstyle:{alignItems:'center',marginBottom:5},
Location:{color:Colors.lightgray},
Setting:{alignContent:'center',justifyContent:'center',width:362,height:78,borderRadius:30,marginTop:10,backgroundColor:Colors.cream},
Imagestyle:{flexDirection:'row',alignItems:'center',marginLeft:10,justifyContent:'space-around'},
Managebooking:{fontSize:18,fontFamily:theme.MEDIUM},
ImageStyle:{height:900,width:500},
Lockstyle:{width:48,height:48}
})
export default Styles
