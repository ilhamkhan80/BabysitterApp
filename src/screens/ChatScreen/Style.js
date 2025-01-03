import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'


const Styles = StyleSheet.create({
    MyProfile: {
        padding: 20,
    },
    ProfileStyle: {
        textAlign: 'center',
        fontFamily: theme.BOLD,
        fontSize: 22,
        color: Colors.purple,
        paddingTop: 20,
    },
    Plus: {
        height: 52,
        width: 60,
    },
    Flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Arrow: {
        height: 52,
        width: 60,

    },
    TextInputStyle: {
        backgroundColor: 'white',
        width: 253,
        height: 52,
        borderRadius: 12,
        marginBottom: 10,

    },
    Avater: {
        width: 15,
        height: 15,
        borderRadius: 40,
        position: 'absolute',
        left: 10,
        marginTop: 5

    },
    GirlImage: {
        height: 15,
        width: 15,
        borderRadius: 40,
        marginLeft: 10,
        marginTop: 10,
        left: 171
    },
    ChatStyle: {
        backgroundColor: Colors.Atfernoon,
        width: 250,
        height: 55,
        borderRadius: 15,
        left: 6,
    },
    LoremTextStyle: {
        fontSize: 12,
        fontFamily: theme.MEDIUM,
        marginLeft: 20,
        marginTop: 10,
        marginRight: 10

    },
    TickStyle: {
        width: 13,
        height: 8,
        marginLeft: 10,
        marginTop: 5,
    },
    TimingViewStyle: {
        flexDirection: 'row',
    },
    TimingStyle: {
        fontSize: 10,
        marginLeft: 5,
        justifyContent:'flex-end',
    },
    ChatStyle2: {
        backgroundColor: Colors.lightpurple,
        borderRadius: 15,
        alignSelf: 'flex-end',
        flexWrap: 'wrap',
        width: 240,
        height: 76,


    },
    LoremTextStyle1: {
        fontSize: 12,
        fontFamily: theme.MEDIUM,
        marginLeft: 20,
        color: Colors.White,
        marginTop: 5,
        marginRight: 10
    },
    TimingStyle1: {
        fontSize: 10,
        marginLeft: 5,
        alignSelf: 'flex-end',
        position:'absolute',
        right:10,
        
        // marginRight: 20,
    },
    ChatStyle: {
        backgroundColor: Colors.Atfernoon,
        padding: 10,
        borderRadius: 15,
        alignSelf: 'flex-start',
        marginVertical: 5,
        flexWrap: 'wrap',
    },
    //   ChatStyle2: {
    //     backgroundColor: Colors.lightpurple,
    //     padding: 10,
    //     borderRadius: 15,
    //     alignSelf: 'flex-end',
    //     marginVertical: 5,
    //     flexWrap: 'wrap',
    //   },
    Image:{
        position:'absolute',
        left:-10
    },
    // Image2:{
    //     position:'absolute',
    //     right:0
    // }



})
export default Styles
