import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Styles from './Style'
const Splash = () => {
  return (
    <View  style={Styles.ViewStyle}>
    <View style={Styles.ImageStyle} >
      <Image style={Styles.Image}source={require('../../images/baby2.png')}/>
      <View style={Styles.ViewText}>
        <Text style={Styles.Text}>BabySitter</Text>
        </View>
      </View>
     
   
    
    
   
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})