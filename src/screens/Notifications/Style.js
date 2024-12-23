import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
    Iconstyle:{flexDirection:'row',paddingTop:10,marginTop:10,marginLeft:10,alignItems:'center'},
    Notificationstyle:{textAlign:'center',flex:1,fontFamily:theme.MEDIUM,fontSize:18,color:Colors.purple,marginRight:10},
    Today:{fontSize:14,fontFamily:theme.MEDIUM,color:Colors.Black},
    Todaystyle:{marginLeft:10,padding:20},
    Imagestyle:{justifyContent:'center',width:'95%',alignSelf:'center',borderRadius:11,borderWidth:1,padding:10,borderColor:Colors.cream,backgroundColor:Colors.White},
    Txtstyle:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    Ago:{textAlign:'right',color:Colors.gray,alignSelf:'flex-end'},
    Vilma:{fontSize:12,fontFamily:theme.BOLD},
    card: {
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 11,
        borderWidth: 1,
        padding: 10,
        borderColor: '#F5F5F5', 
        backgroundColor: '#FFFFFF', 
        marginVertical: 5,
      },
      image: {
        width: 45,
        height: 45,
        marginLeft:10
      },
      name: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
      },
      time: {
        fontSize: 12,
        color: '#999',
      },
      notificationText: {
        color: '#999', 
        fontSize: 14,
      },
      margin:{ marginLeft: 10, flex: 1 },
      flex:{flexDirection:'row'}
})
export default Styles
