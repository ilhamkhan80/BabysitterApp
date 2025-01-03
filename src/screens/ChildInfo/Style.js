import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'

const Styles = StyleSheet.create({
    Icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    ImageStyle: {
        // height: 900,
        // width: 500,
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
    Image: {
        borderRadius: 60,
        alignSelf: 'center',
        height: 110,
        width: 110,
        backgroundColor: Colors.darkGray,
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
    TextInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.bordercolor,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '100%',
    },
    TextStyle: {
        width: '90%',
        height: 128,
        backgroundColor: 'white',
        color: Colors.Black,
        textAlignVertical: 'top',
        placeholderTextColor:'#30353580' 

    },
    ModalImage: {
        width: 193,
        height: 140,
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
    },
    CustomStyle: {
        backgroundColor: 'white',
        width: 335,
        placeholderTextColor:'#30353580'
    },
    LoremTextStyle1: {
        fontSize: 10,
        fontWeight:400,
        alignSelf:'center',
        marginLeft:10,
        top:-10
    },
    

})
export default Styles
