import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyProfile from './Index'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'



const Styles = StyleSheet.create({
    Bell: {
        alignSelf: 'flex-start',
        position: 'absolute',
        right: 20,
        marginTop: 20,
    },
    MyProfile: {
        marginTop: 50,
    },
    ProfileStyle: {
        textAlign: 'center',
        fontFamily: theme.BOLD,
        fontSize: 22,
        color: Colors.purple,
        paddingTop: 20,
    },
    Image: {
        borderRadius: 60,
        alignSelf: 'center',
        height: 110,
        width: 110,
    },
    Anaholmes: {
        textAlign: 'center',
        fontSize: 24,
        color: Colors.purple,
        fontWeight:500
    },
    IconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    GmailStyle: {
        alignItems: 'center',
        marginBottom: 5,
    },
    Location: {
        color: Colors.lightgray,
        marginLeft:10
    },
    Setting: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 78,
        borderRadius: 30,
        marginTop: 10,
        backgroundColor: Colors.cream,
        alignSelf:'center',
    },
    ImageStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'space-around',
    },
    ManageBooking: {
        fontSize: 18,
        fontFamily: theme.MEDIUM,
        marginRight:10
    },
    ImageStyleLarge: {
        height: 900,
        width: 500,
    },
    LockStyle: {
        width: 48,
        height: 48,
    },
    
})
export default Styles
