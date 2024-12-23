import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
    babysitterstyle:{fontSize:16,color:Colors.Black},
    txtstyle:{color:Colors.Blue,textAlign:'right'},
    mainview:{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'},
    liststyle:{borderWidth:1,margin:10,borderRadius:12,borderColor:Colors.cream,backgroundColor:'white'},
    viewstyle :{flexDirection:'row',padding:10,marginLeft:10},
    iconstyle :{flexDirection:'column',marginLeft:12},
    Babysitter:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:10,width:'90%'},
    Linestyle:{ width: '40%', height: 5,backgroundColor: '#E0E0E0',  borderRadius: 2.5,  alignSelf: 'center', marginVertical: 10, },
    Buttonstyle:{    marginTop: 8, borderWidth: 1, borderColor: '#96A0A6', borderRadius: 12,flexDirection: 'row',alignSelf:'center', alignItems: 'center',justifyContent: 'space-between', paddingHorizontal: 10,},
    Inputstyle:{width:'80%',height:42,backgroundColor:'white',color:'black',alignSelf:'center',justifyContent:'center'} ,

})
export default Styles