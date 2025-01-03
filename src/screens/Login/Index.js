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
    <View style={Styles.MainView} >
      <View style={Styles.View}>
        <Text style={Styles.Text}>Login</Text>
      </View>
      <View>
      <View style={{marginTop:25,paddingTop:15}}>

      <View style={Styles.ViewStyle}>
        <Text style={Styles.TextStyle}>
          Your email
        </Text>
          <CustomInput placeholder='Email Address' />
        </View>
      </View>
      <View style={Styles.ViewStyle}>
        <Text style={Styles.TextStyle}>
          Password
        </Text>
        <View>
          <CustomInput placeholder='Password' Icon="true" color='#3A4DA0'
            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={22} type="Ionicons"
          
            onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
            secureTextEntry={!isPasswordVisible}
          />

        </View>

      </View>
      </View>
      <CustomButton tittle='LOGIN'customstyle={{fontFamily:theme.BOLD}} customStyle={{ width: 330,height:48 }}
        onPress={() => navigation.navigate('Home')}
      />
      <View style={Styles.TextStyleCentered}>
        <Text >Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}>
          <Text style={{ color: Colors.Blue, fontFamily: theme.BOLD }}> Sign up</Text>
        </TouchableOpacity>
      </View>
     

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})