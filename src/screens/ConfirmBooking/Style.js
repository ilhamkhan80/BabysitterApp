import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({  
      iconStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
        },
        Flex: {
            marginTop: 20,
        },
        BookNow: {
            fontSize: 22,
            color: Colors.purple,
            fontFamily: theme.BOLD,
            marginLeft: 10,
            marginTop: 10,
        },
        TextStyle: {
            fontSize: 14,
            marginLeft: 10,
        },
        SelectedDate: {
            fontSize: 18,
            fontFamily: theme.MEDIUM,
            color: Colors.purple,
            marginLeft: 10,
        },
        DateView: {
            backgroundColor: Colors.Atfernoon,
            marginTop: 20,
            borderRadius: 23,
            height: 126,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            borderWidth:1,
            width:'95%',
            borderColor:Colors.bordercolor,
            alignSelf:'center'
        },
        Change: {
            fontSize: 12,
            color: Colors.gray,
            marginTop: 5,
            marginLeft: 13,
            fontWeight:400,
        },
        BabySitter: {
            backgroundColor: Colors.Atfernoon,
            marginTop: 10,
            borderRadius: 23,
            height: 126,
            borderWidth:1,
            width:'95%',
            borderColor:Colors.bordercolor,
            alignSelf:'center'
        },
        BabyStyle: {
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
        },
        NemoStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            top:-7
        },
        GirlImage: {
            width: 46,
            height: 46,
            marginRight: 10,
        },
        Payment:{ 
            width: 16, 
            height: 14, 
            marginLeft: 20,
            marginTop:10 

        },
        PaymentStyle: {
            width: 30,
            height: 19,
            marginRight: 15,
            marginTop:10,
        },
        Total: {
            fontSize: 18,
            marginLeft: 10,
            color: Colors.purple,
        },
        Textstyle:{
            fontWeight:400,
            fontSize:14,
            marginTop:10

        },
        ButtonStyle: {
            width: 300,
            height: 44,
            borderRadius: 22,
            backgroundColor:Colors.purple
        },
        TotalStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        Text55: {
            fontSize: 18,
            marginLeft: 10,
        },
        FlexDirection: {
            flexDirection: 'column',
            marginTop:10
        },
        FlexStyle: {
            flexDirection: 'row',
            gap: 10,
        },
        Change1: {
            fontSize: 12,
            color: Colors.gray,
            marginTop: 5,
            marginLeft: 10,
            fontWeight:400,
            marginRight:10
        },
        

})
export default Styles
