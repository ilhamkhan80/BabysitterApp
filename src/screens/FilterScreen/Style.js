import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
    Iconstyle:{
        flexDirection:'row',
        paddingTop:10,
        marginTop:10,
        marginLeft:10,
        alignItems:'center'
    },
    Notificationstyle:{
        textAlign:'center',
        flex:1,fontFamily:theme.MEDIUM,
        fontSize:18,
        color:Colors.purple,
        marginRight:10
    },
    Experience:{
        padding:10,
        marginTop:20
    },
    Experiencestyle:{
        fontSize:16,
        fontFamily:theme.MEDIUM
    },
    Lowexperience:{
        fontSize:12,
        color:Colors.lightgray,
        fontFamily:theme.MEDIUM
    },
    Lowstyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    Sliderstyle:{
        backgroundColor:Colors.Slider,
        padding:10,
        alignSelf:'center',
        borderRadius:14,
        width:'97%'
    },
    Special:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Ages:{ 
        fontSize:14,
        color:Colors.Black,
        fontFamily:theme.MEDIUM
    },
    Baby:{
        fontSize:14,
        color:Colors.lightgray,
        fontFamily:theme.MEDIUM
    },
    Babystyle:{
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
})
export default Styles