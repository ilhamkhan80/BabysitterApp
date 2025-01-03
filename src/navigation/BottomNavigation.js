import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../themes/Colors'
import HomeScreen from '../screens/HomeScreen/Index'
import Icon from '../themes/Icons'
import Like from '../BottomScreens/Like'
import Comment from '../BottomScreens/Comment'
import User from '../BottomScreens/User'
import LikeBabysitter from '../screens/LikeBabysitter/Index'
import MyProfile from '../screens/MyProfile/Index'
import ChatScreen from '../screens/ChatScreen/Index'

const BottomNavigation = () => {
    const Bottom=createBottomTabNavigator()
  return (
  <Bottom.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.Blue,tabBarShowLabel: false,tabBarInactiveTintColor:Colors.gray}}>
    <Bottom.Screen name='Home'
    component={HomeScreen}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
                <Image  style={[
              { width: 24, height: 22 },
              { tintColor: focused ? Colors.Blue : Colors.gray },
            ]}
            source={require('../images/home.png')}
          />
            </View>
        )
    }}}/>
    <Bottom.Screen name='Like'
    component={LikeBabysitter}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
                <Image  style={[
              { width: 24, height: 19.99 },
              { tintColor: focused ? Colors.Blue : Colors.gray },
            ]}source={require('../images/grayheart.png')}/>
            </View>
        )
    }}}/>
     <Bottom.Screen name='Chat'
    component={ChatScreen}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
                <Image  style={[
              { width: 20, height: 20 },
              { tintColor: focused ? Colors.Blue : Colors.gray },
            ]}source={require('../images/chat.png')}/> 
            </View>
        )
    }}}/>
     <Bottom.Screen name='User'
    component={MyProfile}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
 <Image  style={[
              { width: 18, height: 22 },
              { tintColor: focused ? Colors.Blue : Colors.gray },
            ]}source={require('../images/grayuser.png')}/>         
               </View>
        )
    }}}/>

  </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})