import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
    babysitterstyle: {
        fontSize: 16,
        color: Colors.Black
    },
    txtstyle: {
        color: Colors.Blue,
        fontSize:12,
        fontFamily:theme.MEDIUM,
        textAlign:'right',
        flex:1,marginTop:10
 
    },
    mainview: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    liststyle: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 12,
        borderColor: Colors.bordercolor,
        backgroundColor: 'white',
    },
    viewstyle: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    },
    iconstyle: {
        flexDirection: 'column',
        marginLeft: 15
    },
    Babysitter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent:'space-between'
    },
    Linestyle: {
        width: '10%',
        height: 3,
        backgroundColor: '#E0E0E0',
        borderRadius: 2.5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    Buttonstyle: {
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#96A0A6',
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    Inputstyle: {
        width: '80%',
        height: 42,
        backgroundColor: 'white',
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    Mainview: {
        flex: 1,
        backgroundColor: 'white'
    },
    Imagestyle: {
        width: 12,
        height: 12
    },
    overlay: {
        position: 'absolute',
        top:40,
        left: 10,
        right: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 14,
        paddingHorizontal: 10,
        height: 45,
        elevation: 3,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width:'100%',
        
      },
      inputStyle: {
        flex: 1,
        marginLeft: 10,
      },
      iconStyle: {
        height: 17,
        width: 18,
        marginLeft: 10,
      },
      discription:{
        fontSize:10,
        fontWeight:400,
        color:Colors.txtcolor,
        fontFamily:theme.MEDIUM},
        Reviews:{
            color:Colors.purple,
            fontSize:10,
            fontFamily:theme.MEDIUM,
            marginLeft:10
        },
        Price:{ 
            marginLeft: 50,
            fontFamily:theme.BOLD,
            color:Colors.purple 
        },
})
export default Styles