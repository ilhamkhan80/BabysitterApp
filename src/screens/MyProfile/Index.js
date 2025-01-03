import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../themes/Icons'
import Styles from '../MyProfile/Style'
import Colors from '../../themes/Colors'
import theme from '../../utils/Constants'
import { useNavigation, useRoute } from '@react-navigation/native'


const MyProfile = () => {
    const route = useRoute();
    const { imageUri,username,Location,Email} = route.params||{};
    const navigation=useNavigation()
    return (
        <View >
            <View style={{flex:1}}>
                <Image style={Styles.ImageStyle} source={require('../../images/Myprofile.png')}/>
            </View>
            <ImageBackground resizeMode='conatin' style={{height:750,width:'100%'}} source={require('../../images/Myprofile.png')}>
            <View style={Styles.Bell}>
                <Icon name="bell" type="Feather" color="gray" size={23} />
            </View>
            <View style={Styles.MyProfile}>
                <Text style={Styles.ProfileStyle}>
                    My Profile
                </Text>
            </View>
            <View>
                {imageUri?(<Image source={{ uri: imageUri }} style={Styles.Image} />):
                 (
                <Image style={Styles.Image} source={require('../../images/image1.png')} />
                )}
            </View>
            <View style={Styles.IconStyle}>
                <Text style={Styles.Anaholmes}>
                {username?username:'Ana Holmes'}
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
                 <Image style={{width:12,height:12,left:10}}source={require('../../images/edit.png')}/>
                </TouchableOpacity>

            </View>
            <View style={Styles.GmailStyle}>
                <Text style={{fontWeight:400,fontSize:14}} >{Email?Email:"Ana Holmes12@gmal.com" } </Text>


            </View>
            <View style={Styles.IconStyle}>
                <Image style={{width:11,height:13}} source={require('../../images/location2.png')}/>
                <Text style={Styles.Location}>{Location?Location:'cairo,Egypt'}</Text>
               

            </View>

        <View style={{marginTop:20}}>
            <View style={Styles.Setting}>
            <View style={Styles.ImageStyle}>
                <Image style={Styles.LockStyle}source={require('../../images/Setting.png')}/>
                <Text style={Styles.ManageBooking}>Manage Booking</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.ImageStyle}>
                <Image style={Styles.LockStyle}source={require('../../images/User.png')}/>
                <Text style={Styles.ManageBooking}>Add A Child info</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ChildInfo')}>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.ImageStyle}>
                <Image style={Styles.LockStyle}source={require('../../images/Bell.png')}/>
                <Text style={Styles.ManageBooking}>Notification</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black'size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.ImageStyle}>
                <Image style={Styles.LockStyle}source={require('../../images/Lock.png')}/>
                <Text style={Styles.ManageBooking}>Password</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>

            </View>

            </ImageBackground>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({})