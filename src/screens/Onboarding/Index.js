import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
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
          <View style={{ flex: 1 }}>
            <Image style={Styles.imagestyle} source={require('../../images/mother.png')} />
            <View style={Styles.view}>
              <Text style={Styles.text}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={Styles.textstyle}>Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={Styles.textstyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.textstyle}>incididunt ut labore </Text>
            </View>
            <CustomButton
              tittle='Continue' onPress={() => setSteps(steps + 1)} />
          </View>
        )
      case 1:
        return (
          <View style={{ flex: 1 }}>

            <Image style={Styles.imagestyle} source={require('../../images/mother.png')} />

            <View style={Styles.view}>
              <Text style={Styles.text}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={Styles.textstyle}>Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={Styles.textstyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.textstyle}>incididunt ut labore </Text>
            </View>
            <CustomButton
              tittle='Continue' onPress={() => setSteps(steps + 1)} />
          </View>
        )
      case 2:
        return (
          <View style={{ flex: 1 }}>
            <Image style={Styles.imagestyle} source={require('../../images/mother.png')} />
            <View style={Styles.view}>
              <Text style={Styles.text}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={Styles.textstyle}>Lorem ipsum dolor sit amet, consectetur</Text>
              <Text style={Styles.textstyle}>adipiscing elit, sed do eiusmod tempor</Text>
              <Text style={Styles.textstyle}>incididunt ut labore </Text>
            </View>
            <CustomButton
              tittle='Get Started' onPress={() => handleNavigation()} />
          </View>
        )
    }
  }
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderOnboardingScreens()}
      </ScrollView>
    </View>

  )
}


export default Onboarding

const styles = StyleSheet.create({})