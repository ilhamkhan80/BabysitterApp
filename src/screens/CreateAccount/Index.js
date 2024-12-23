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
        <View>
            <View style={Styles.view}>
                <Text style={Styles.text}>Create account</Text>
            </View>
            <View >
                <Text style={Styles.txtstyle}>
                    Lorem ipsum dolor sit amet, consectetur
                </Text>
                <Text style={Styles.txtstyle}>adipiscing elit  sit amet, consectetur.</Text>
            </View>

            <View style={Styles.viewstyle}>
                <Text style={Styles.textstyle}>
                    Your email
                </Text>
                <View>
                    <CustomInput placeholder='Email Address' Icon='true' type='AntDesign' name='check' color='#3A4DA0' />
                </View>
            </View>
            <View style={Styles.viewstyle}>
                <Text style={Styles.textstyle}>
                    Password
                </Text>
                <View  >
                    <CustomInput placeholder='Password' Icon="true" color='#3A4DA0'
                        name={isPasswordVisible ? 'eye' : 'eye-with-line'} size={20} type="Entypo"
                        onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                        secureTextEntry={!isPasswordVisible}
                    />

                </View>
            </View>
            <View style={Styles.viewstyle}>
                <Text style={Styles.textstyle}>
                    Phone Number
                </Text>
                <View style={Styles.Buttonstyle}>
                    <CountryPicker
                        countryCode={countryCode}
                        withFlag={true}
                        withCallingCode={true}
                        onSelect={onSelect}
                        // visible
                    />
                    <Text style={styles.callingCode}>
                        +{country?.callingCode}
                    </Text>
                    <TextInput style={Styles.Inputstyle} placeholder='Phone Number' keyboardType="phone-pad"
                        onChangeText={(input) => setPhone(input)}
                        value={phone} />
                </View>

            </View>
            <CustomButton tittle='create account' customStyle={Styles.buttonstyle} onPress={() => navigation.navigate('BottomScreen')} />
            <View>
                <Text style={Styles.googlestyle}>Or</Text>
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
                        facebook
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.textStyle}>
                <Text >You have an account?   </Text>
                <TouchableOpacity>
                    <Text style={{ color: Colors.Blue, fontFamily: theme.BOLD }}> Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({})