import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Styles from './Style'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
  const navigation=useNavigation()
  return (
    <View  style={Styles.viewstyle}>
    <View style={Styles.imagestyle} >
      <Image style={Styles.image}source={require('../../images/baby.png')}/>
      <View style={Styles.viewtext}>
        <Text style={Styles.text}>BabySitter</Text>
        </View>
      </View>
     
   
    
    
   
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})