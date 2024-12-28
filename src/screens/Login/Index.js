import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Login/Style'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Colors from '../../themes/Colors'
import { useNavigation } from '@react-navigation/native'
import theme from '../../utils/Constants'

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation()
  return (
    <View >
      <View style={Styles.view}>
        <Text style={Styles.text}>Login</Text>
      </View>
      <View style={Styles.viewstyle}>
        <Text style={Styles.textstyle}>
          Your email
        </Text>
        <View>
          <CustomInput placeholder='Email Address' />
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
      <CustomButton tittle='Login' customStyle={{ width: '90%' }}
        onPress={() => navigation.navigate('CreateAccount')}
      />
      <View style={Styles.textStyle}>
        <Text >Don’t have an account?  </Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.Blue, fontFamily: theme.BOLD }}> Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})