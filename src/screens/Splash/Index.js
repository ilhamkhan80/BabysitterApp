import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Styles from './Style'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
  const navigation=useNavigation()
  return (
    <View  style={Styles.ViewStyle}>
    <View style={Styles.ImageStyle} >
      <Image style={Styles.image}source={require('../../images/baby.png')}/>
      <View style={Styles.ViewText}>
        <Text style={Styles.Text}>BabySitter</Text>
        </View>
      </View>
     
   
    
    
   
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})