import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({  
      iconstyle: { flexDirection: 'row', justifyContent: 'space-between', margin: 10 },
      Flex:{flex:1,marginTop:10},
      BookNow:{fontSize:22,color:Colors.purple,fontFamily:theme.BOLD,marginLeft:10,marginTop:10},
      Textstyle:{fontSize:14,marginLeft:10},
      Selecteddate:{fontSize:18,fontFamily:theme.MEDIUM,color:Colors.purple,marginLeft:10},
      Dateview:{backgroundColor:Colors.Atfernoon,marginTop:20,borderRadius:23,height:126,flexDirection:'row',padding:10,justifyContent:'space-between',},
      Change:{fontSize:12,color:Colors.gray,marginTop:5,marginLeft:10,},
      BabySitter:{backgroundColor:Colors.Atfernoon,marginTop:10,borderRadius:23,height:126,},
      Babystyle:{flexDirection:'row',padding:10,justifyContent:'space-between'},
      Nemostyle:{flexDirection:'row',justifyContent:'space-between'},
      Girlimage:{width:46,height:46,marginRight:10},
      Paymentstyle:{width:30,height:19,marginRight:10},
      Total:{fontSize:18,marginLeft:10,color:Colors.purple},
      Buttonstyle:{width:300,height:44,borderRadius:22},
      Totalstyle:{flexDirection:'row',alignItems:'center',gap:10},
      Text55:{fontSize:18,marginLeft:10},
      Flexdirection:{flexDirection:'column'},
      Flexstyle:{flexDirection:'row',gap:10},

})
export default Styles
