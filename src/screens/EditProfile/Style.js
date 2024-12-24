import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../themes/Icons'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'




const Styles = StyleSheet.create({
Icon:{flexDirection:'row',justifyContent:'space-between',marginTop:10},
ImageStyle:{width:50,height:20},
MyProfile:{padding:20},
Profilestyle:{textAlign:'center',fontFamily:theme.BOLD,fontSize:22,color:Colors.purple,paddingTop:20},
Image:{borderRadius:60,alignSelf:'center',height:110,width:110},
Imagestyle:{width:35,height:35,left:200,position:'absolute',bottom:70},
Experiencetxt:{color:Colors.Blue,fontSize:18,marginLeft:10},
margin:{margin:10},
radioGroupContainer: {flexDirection: 'row', justifyContent: 'center', marginVertical: 10, marginHorizontal:10},
Modalimage:{width:193,height:140},
modalText: { fontSize: 18,color:Colors.purple,fontFamily:theme.BOLD,marginTop:20},
Loremtextstyle:{fontSize:9},
modalContent: { width: 340,height:340,padding: 20,backgroundColor: 'white',borderRadius: 32,alignItems: 'center',},
modalContainer: { flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.5)'},
Buttonstyle:{width:312,height:44,borderRadius:22},


})
export default Styles