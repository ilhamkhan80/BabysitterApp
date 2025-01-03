import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from './Style'
import theme from '../../utils/Constants'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Colors from '../../themes/Colors'
import Icon from '../../themes/Icons'
import CountryPicker from 'react-native-country-picker-modal';

import { useNavigation } from '@react-navigation/native'
const CreateAccount = () => {
    const navigation = useNavigation()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('PK');
    const [withFlag, setWithFlag] = useState(true);
    const [withCallingCode, setWithCallingCode] = useState(true);
    const [country, setCountry] = useState(null);

    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={Styles.view}>
                <Text style={Styles.text}>Create account</Text>
            </View>
            <View >
                <Text style={Styles.txtStyle}>
                    Lorem ipsum dolor sit amet, consectetur
                </Text>
                <Text style={Styles.txtStyle}>adipiscing elit  sit amet, consectetur.</Text>
            </View>
            <View style={{marginTop:10}}>
            <View style={Styles.viewStyle}>
                <Text style={Styles.textStyle}>
                    Your email
                </Text>
                <View>
                    <CustomInput placeholder='Email Address'  />
                </View>
            </View>
            <View style={Styles.viewStyle}>
                <Text style={Styles.textStyle}>
                    Password
                </Text>
                <View  >
                    <CustomInput placeholder='Password' Icon="true" color='#3A4DA0'
            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={22} type="Ionicons"
            onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                        secureTextEntry={!isPasswordVisible}
                    />

                </View>
            </View>
            <View style={Styles.viewStyle}>
                <Text style={Styles.textStyle}>
                    Phone Number
                </Text>
                <View style={Styles.ButtonStyleAlt}>
                    <CountryPicker
                        countryCode={countryCode}
                        withFlag={true}
                        withCallingCode={true}
                        onSelect={onSelect}
                    />
                    <Text style={styles.callingCode}>
                        +{country?.callingCode}
                    </Text>
                    <View  >
                    <TextInput style={Styles.InputStyle} placeholder='Phone Number' keyboardType="phone-pad"
                        onChangeText={(input) => setPhone(input)}
                        value={phone} />
                        </View>
                </View>

            </View>
            </View>
            <CustomButton tittle='CREATE ACCOUNT' customstyle={{fontFamily:theme.BOLD}} customStyle={Styles.buttonStyle} onPress={() => navigation.navigate('BottomScreen')} />
            <View>
                <Text style={Styles.googleStyle}>Or</Text>
            </View>
            <View>
                <TouchableOpacity style={Styles.google}>
                    <Image source={require('../../images/google.png')} />
                    <Text style={{ color: Colors.Black }}>
                        Google
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.facebook}>
                    <Image source={require('../../images/facebook.png')} />
                    <Text style={{ color: Colors.White }}>
                        Facebook
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.textStyleAlt}>
                <Text>You have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={{ color: Colors.Blue, fontFamily: theme.BOLD }}> Log in</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({})