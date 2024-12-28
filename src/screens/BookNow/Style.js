import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    iconstyle: { flexDirection: 'row', justifyContent: 'space-between', margin: 10 },
    BookNow:{fontSize:22,color:Colors.purple,fontFamily:theme.BOLD,marginLeft:10,marginTop:10},
    Textstyle:{fontSize:14,marginLeft:10},
    Image:{width:90,height:90,borderRadius:60,alignSelf:'flex-end',borderWidth:2,borderColor:Colors.purple},
    Selecteddate:{fontSize:20,fontFamily:theme.MEDIUM,color:Colors.purple,marginLeft:10},
    Onetime:{fontSize:12,color:Colors.White,textAlign:'center'},
    Onetimestyle:{justifyContent:'center',backgroundColor:Colors.purple,borderColor:Colors.purple,borderWidth:1,width:83,borderRadius:80,height:41},
    View:{width:166,borderWidth:1,borderRadius:80,flexDirection:'row',borderColor:Colors.whitesh,backgroundColor:Colors.whitesh},
    Fulltime:{color:Colors.purple,justifyContent:'center'},
    FullTime:{fontSize:12,color:Colors.purple,textAlign:'center',marginLeft:5},
    Morning:{fontSize:12,justifyContent:'center',textAlign:'center'},
    Morningstyle:{borderRadius:80,width:86,height:41,backgroundColor:Colors.purple},
    Flex:{flexDirection:'row',justifyContent:'space-around'},
    Onetime1:{fontSize:12,color:Colors.Black,textAlign:'center'},
    Onetimestyle1:{justifyContent:'center',backgroundColor:Colors.Atfernoon,borderColor:Colors.Atfernoon,borderWidth:1,width:83,borderRadius:80,height:41},
    Selecteddate1:{fontSize:20,fontFamily:theme.MEDIUM,color:Colors.purple,marginLeft:10,marginTop:10},
    Flexstyle:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:Colors.White,borderRadius:10,marginTop:10,width:366,height:52},
    Fromtext: {marginTop:10,color:Colors.purple,marginLeft:10},
    Imagestyle:{width:14,height:14},
    FlexDirection:{flexDirection:'row',alignItems:'center',marginTop:10},
    Addchild:{fontSize:12,color:Colors.purple,fontFamily:theme.MEDIUM,marginLeft:10,},
    Experiencetxt: { color: Colors.Blue, fontSize: 18, marginLeft: 10 },
    Addresstyle: { flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: Colors.White, borderRadius: 10,height:121,width:'105%',alignSelf:'center'},
    margin: { margin: 10 },
    Notes:{backgroundColor:'white',width:366,height:121,borderRadius:10,textAlignVertical:'top',},
    Iconstyle:{backgroundColor:'white',width:41,height:41,justifyContent:'center',marginTop:10,alignSelf:'center'},
    ViewIcon:{flexDirection:'row',marginBottom:10,alignItems:'center',gap:10},
    Button:{width:300,height:44,backgroundColor:Colors.purple},
    IconContainer: { height: 41,width: 41,backgroundColor: 'white',textAlign:'center',justifyContent:'center'},
    Clockstyle:{width:16,height:18,marginRight:20},
    Mainview:{ flex: 1, padding: 10 },






})
export default Styles