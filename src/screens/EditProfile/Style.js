import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../themes/Icons'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'




const Styles = StyleSheet.create({
    Icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    ImageStyle: {
        width: 50,
        height: 20,
    },
    MyProfile: {
        marginTop: 20,
    },
    ProfileStyle: {
        textAlign: 'center',
        fontFamily: theme.BOLD,
        fontSize: 22,
        color: Colors.purple,
        paddingTop: 20,
    },
    CustomStyle: {
        backgroundColor: 'white',
        width: 335,
    },
    Image: {
        borderRadius: 60,
        alignSelf: 'center',
        height: 110,
        width: 110,
    },
    ImageStyleAlt: {
        width: 35,
        height: 35,
        left: 200,
        position: 'absolute',
        bottom: 70,
    },
    ExperienceText: {
        color: Colors.Blue,
        fontSize: 18,
        marginLeft: 10,
    },
    Margin: {
        margin: 10,
    },
    RadioGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        

    },
    ModalImage: {
        width: 193,
        height: 140,
    },
    LoremTextStyle1: {
        fontSize: 10,
        fontWeight:400,
        alignSelf:'center',
        marginLeft:10,
        top:-10
    },
    ModalText: {
        fontSize: 18,
        color: Colors.purple,
        fontFamily: theme.BOLD,
        marginTop: 20,
    },
    LoremTextStyle: {
        fontSize: 10,
        fontWeight:400,
        alignSelf:'center',
        marginLeft:10
    },
    ModalContent: {
        width: 340,
        height: 340,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 32,
        alignItems: 'center',
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    ButtonStyle: {
        width: 312,
        height: 44,
        borderRadius: 22,
        fontFamily:theme.BOLD
    },



})
export default Styles