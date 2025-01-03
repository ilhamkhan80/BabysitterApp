import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'



const Styles = StyleSheet.create({
  IconStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  NotificationStyle: {
    textAlign: 'center',
    flex: 1,
    fontFamily: theme.MEDIUM,
    fontSize: 18,
    color: Colors.purple,
    marginRight: 10,
  },
  Today: {
    fontSize: 14,
    fontFamily: theme.MEDIUM,
    color: Colors.Black,
  },
  TodayStyle: {
    marginLeft: 20,
    marginTop:30
  },
  ImageStyle: {
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 11,
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.cream,
    backgroundColor: Colors.White,
  },
  TxtStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  Ago: {
    textAlign: 'right',
    color: Colors.gray,
    alignSelf: 'flex-end',
  },
  Vilma: {
    fontSize: 12,
    fontFamily: theme.BOLD,
  },

  card: {
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 11,
    borderWidth: 1,
    padding: 10,
    borderColor: '#0000001A',
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 10
  },
  name: {
    fontSize: 12,
    fontWeight:theme.MEDIUM,
    marginTop:5
  
  },
  time: {
    fontSize: 10,
    color: Colors.txtcolor,
  },
  notificationText: {
    color: Colors.txtcolor,
    fontSize: 8,
    fontWeight:400,
    marginTop:5
  },
  margin: { marginLeft: 10, 
    flex: 1 ,
  },
  flex: { flexDirection: 'row' }
})
export default Styles
