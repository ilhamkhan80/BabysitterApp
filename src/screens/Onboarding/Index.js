import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Onboarding/Style'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
  const navigation = useNavigation()
  const [steps, setSteps] = useState(0)

  const handleNavigation = () => {
    AsyncStorage.setItem("Onboarding", "completed")
    navigation.replace("Login", { screen: 'Login' })
  }

  const renderOnboardingScreens = () => {
    switch (steps) {
      case 0:
        return (
          <View>
            <Image style={Styles.ImageStyle} source={require('../../images/Mother2.png')} />
            <View style={Styles.View}>
              <Text style={Styles.Text}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={Styles.TextStyle}>Lorem ipsum dolor sit amet, consectetur</Text>
              <Text style={Styles.TextStyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.TextStyle}>incididunt ut labore </Text>
            </View>
            <CustomButton tittle='Continue' onPress={() => setSteps(steps + 1)} />
          </View>
        )
      case 1:
        return (
          <View>
            <Image style={Styles.ImageStyle} source={require('../../images/Mother2.png')} />
            <View style={Styles.View}>
              <Text style={Styles.Text}>Lorem ipsum</Text>
            </View>
            <View >
              <Text style={Styles.TextStyle}>Lorem ipsum dolor sit amet, consectetur</Text>
              <Text style={Styles.TextStyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.TextStyle}>incididunt ut labore </Text>
            </View>
            <CustomButton tittle='Continue' onPress={() => setSteps(steps + 1)} />
          </View>
        )
      case 2:
        return (
          <View>
            <Image style={Styles.ImageStyle} source={require('../../images/Mother2.png')} />
            <View style={Styles.View}>
              <Text style={Styles.Text}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={Styles.TextStyle}>Lorem ipsum dolor sit amet, consectetur</Text>
              <Text style={Styles.TextStyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.TextStyle}>incididunt ut labore </Text>
            </View>
            <CustomButton tittle='Get Started' onPress={() => handleNavigation()} />
          </View>
        )
    }
  }

  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderOnboardingScreens()}
      </ScrollView>
      
      <View style={Styles.dotContainer}>
        {[0, 1, 2].map((_, index) => (
          <View
            key={index}
            style={[
              Styles.dot,
              { backgroundColor: steps === index ? '#3A4DA0' : '#D9D9D9' }, 
            ]}
          />
        ))}
      </View>

      {steps < 2 && (
        <TouchableOpacity style={Styles.skipButton} onPress={() => handleNavigation()}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})
