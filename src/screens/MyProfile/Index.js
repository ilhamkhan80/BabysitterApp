import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            <View style={Styles.Bell}>
                <Icon name="bell" type="Feather" color="gray" size={23} />
            </View>
            <View style={Styles.MyProfile}>
                <Text style={Styles.Profilestyle} >
                    My Profile
                </Text>
            </View>
            <View>
                {imageUri?(<Image source={{ uri: imageUri }} style={Styles.Image} />):
                 (
                <Image style={Styles.Image} source={require('../../images/image1.png')} />
                )}
            </View>
            <View style={Styles.Iconstyle}>
                <Text style={Styles.Anaholmes}>
                {username?username:'Ana Holmes'}
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
                    <Icon name='pen' type='FontAwesome5' size={15} color={Colors.purple} />
                </TouchableOpacity>

            </View>
            <View style={Styles.Gmailstyle}>
                <Text >{Email?Email:"Ana Holmes12@gmal.com" } </Text>


            </View>
            <View style={Styles.Iconstyle}>
                    <Icon name='location' type='Ionicons' size={15} color={Colors.lightgray} />
                <Text style={Styles.Location}>{Location?Location:'cairo,Egypt'}</Text>
               

            </View>
            <View style={Styles.Setting}>
            <View style={Styles.Imagestyle}>
                <Image style={Styles.Lockstyle}source={require('../../images/Setting.png')}/>
                <Text style={Styles.Managebooking}>Manage Booking</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.Imagestyle}>
                <Image style={Styles.Lockstyle}source={require('../../images/User.png')}/>
                <Text style={Styles.Managebooking}>Add A Child info</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ChildInfo')}>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.Imagestyle}>
                <Image style={Styles.Lockstyle}source={require('../../images/Bell.png')}/>
                <Text style={Styles.Managebooking}> Notification</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black'size={14}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.Setting}>
            <View style={Styles.Imagestyle}>
                <Image style={Styles.Lockstyle}source={require('../../images/Lock.png')}/>
                <Text style={Styles.Managebooking}>Password</Text>
                <TouchableOpacity>
                    <Icon name='arrowright' type='AntDesign' color='black' size={14}/>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({})