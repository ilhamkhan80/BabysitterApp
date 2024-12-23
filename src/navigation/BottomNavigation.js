import { StyleSheet, Text, View } from 'react-native'
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
  <Bottom.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.Blue,tabBarInactiveTintColor:Colors.gray}}>
    <Bottom.Screen name='Home'
    component={HomeScreen}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
                <Icon name='home-outline' type='Ionicons' color={focused?Colors.Blue:Colors.gray}/>
            </View>
        )
    }}}/>
    <Bottom.Screen name='Like'
    component={LikeBabysitter}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
         <Icon name='hearto' type='AntDesign' color={focused?Colors.Blue:Colors.gray}/>
            </View>
        )
    }}}/>
     <Bottom.Screen name='Chat'
    component={ChatScreen}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
         <Icon name='chatbox-outline' type='Ionicons' color={focused?Colors.Blue:Colors.gray}/>
            </View>
        )
    }}}/>
     <Bottom.Screen name='User'
    component={MyProfile}
    options={{tabBarIcon:({focused})=>{
        return(
            <View>
         <Icon name='user' type='AntDesign' color={focused?Colors.Blue:Colors.gray}/>
            </View>
        )
    }}}/>

  </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})