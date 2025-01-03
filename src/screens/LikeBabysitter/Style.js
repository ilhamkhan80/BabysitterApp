import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    View: {
        backgroundColor:'white',
        flex: 1,
    },
    LikeBabysitter: {
        marginTop: 20,
        paddingTop: 20,
       flexDirection: 'row', 
       alignItems: 'center', 
       justifyContent: 'space-between'  
    },
    Imagestyle:{
        alignSelf:'flex-end',
        width:12,
        height:10
    },
    LikeBabysitterText: {
        padding: 20,
        fontWeight:600,
        color: Colors.purple,
        fontSize: 18,
        textAlign: 'center', 
        flex: 1
    },
    ListStyle: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 14,
        borderColor: Colors.bordercolor,
        backgroundColor: 'white',
        padding: 5,
        width:'90%',
        height:110,
    },
    ViewStyle: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
    },
    LikeBaby: {
        alignSelf:'center',
        
    },
    NameStyle: {
        fontWeight:600,
        marginLeft: 10,
        fontSize:14
    },
    Margin: {
        marginLeft: 10,
        color:Colors.txtcolor,
        fontSize:10,
        fontWeight:400,
        marginTop:2,
        alignItems:'center'
    },
    Rating:{
        fontWeight:600,
        fontSize:10,
        marginLeft:5
    },
    Reviews:{
        fontFamily:theme.MEDIUM,
        fontSize:10,
        marginLeft:10,
        color:Colors.purple
    },
    Price:{ 
        marginLeft: 45,
        fontWeight:600,
        fontSize:14,
        color:Colors.purple,
    }
})
export default Styles
