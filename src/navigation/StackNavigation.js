import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash/Index'
import Onboarding from '../screens/Onboarding/Index'
import Login from '../screens/Login/Index'
import CreateAccount from '../screens/CreateAccount/Index'
import HomeScreen from '../screens/HomeScreen/Index'
import ProfileScreen from '../screens/ProfileScreen/Index'
import BottomNavigation from './BottomNavigation'
import Notifications from '../screens/Notifications/Index'
import FilterScreen from '../screens/FilterScreen/Index'
import MyProfile from '../screens/MyProfile/Index'
import EditProfile from '../screens/EditProfile/Index'
import Childinfo from '../screens/ChildInfo/Index'
import BookNow from '../screens/BookNow/Index'
import ConfirmBooking from '../screens/ConfirmBooking/Index'
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const [splash, setSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000);
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        {splash ?
          <Stack.Screen name={'Splash'} component={Splash} />
          : <Stack.Screen name={'Onboarding'} component={Onboarding}
          />
        }
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='BottomScreen' component={BottomNavigation}/>
        <Stack.Screen name='Notifications' component={Notifications}/>
        <Stack.Screen name='FilterScreen' component={FilterScreen}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='User' component={MyProfile}/>
        <Stack.Screen name='ChildInfo' component={Childinfo}/>
        <Stack.Screen name='BookNow' component={BookNow}/>
        <Stack.Screen name='ConfirmBooking' component={ConfirmBooking}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})