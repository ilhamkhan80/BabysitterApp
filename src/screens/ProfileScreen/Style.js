import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'





const Styles = StyleSheet.create({
  iconstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 30
  },
  LocationStyle: {
    width: 14,
    height: 14
  },
  view: {
    flexDirection: 'row'
  },
  textstyle: {
    fontFamily: theme.BOLD,
    color: Colors.Blue,
    fontSize: 18
  },
  location: {
    fontFamily: theme.MEDIUM
  },
  price: {
    color: Colors.Black
  },
  hours: {
    color: Colors.gray
  },
  flexDirection: {
    flexDirection: 'column'
  },
  flex: {
    flexDirection: 'row',
    marginLeft: 20
  },
  call: {
    backgroundColor: Colors.green,
    padding: 7,
    borderRadius: 13,
    flexDirection: 'row',
    gap: 5
  },
  callstyle: {
    color: Colors.White
  },
  IconStyle: {
    marginLeft: 7,
    flexDirection: 'row'
  },
  Experiencetxt: {
    color: Colors.Blue,
    fontSize: 18,
    marginLeft: 5,
    fontFamily: theme.MEDIUM,

  },
  Txtstyle: {
    fontSize: 12,
    marginLeft: 8,


  },
  Aboutstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 11,
    padding: 10,
    shadowOpacity: 10,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    alignItems: 'center',
    width: 340,
    height: 44
  },
  AboutStyle: {
    color: Colors.Black,
    fontFamily: theme.MEDIUM,
    fontSize: 14
  },
  AboutText: {
    fontWeight: 400,
    fontSize: 14,
    color: '#303535',
    marginLeft: 5
  },
  Locationstyle: {
    color: Colors.Blue,
    textAlign: 'center',
    fontFamily: theme.MEDIUM,
    fontSize: 14,
    alignItems: 'center'
  },
  Flexreviews: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Numberstyle: {
    color: Colors.gray
  },
  Location: {
    borderRadius: 43,
    borderColor: Colors.Blue,
    padding: 5,
    backgroundColor: Colors.Lightblue,
    width: 83,
    height: 28,
    alignItems: 'center'
  },
  // Addresstyle: {
  //   // flexDirection: 'row',
  //   // justifyContent: 'space-between',
  //   backgroundColor: Colors.White,
  //   borderRadius: 10,

  // },
  margin: {
    margin: 10,

  },
  Textstyle: {
    fontWeight: 400,
    fontSize: 14,
    color: '#303535',
    marginLeft: 10,

  },
  Viewstyle: {
    width: 330,
    height: 121,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.bordercolor

  },
  ImageStyle: {
    width: 14,
    height: 17,
    position: 'absolute',
    right: 10,
    marginTop: 10
  },
  LocationSTYLE: {
    width: 15,
    height: 18,
    alignSelf: 'flex-end',
    marginRight: 10
  },
  callButton: {
    backgroundColor: '#2ECC71',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.green,
    padding: 7,
    borderRadius: 13
  },
  profileImage: {
    height: 110,
    width: 110,
    borderRadius: 60,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 18,
    borderColor: Colors.bordercolor,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10

  },
  profileImage: {
    height: 110,
    width: 110,
    borderRadius: 60,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Blue,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    color: Colors.purplish,
    fontWeight: theme.REGULAR,
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: Colors.Black,
    fontWeight: 'bold',
  },
  priceDetails: {
    fontSize: 14,
    color: Colors.hourscolor,
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likesText: {
    fontSize: 14,
    color: Colors.gray,
    marginLeft: 5,
  },
  rightSection: {
    alignItems: 'flex-end',
  },

  callButton: {
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 67,
    height: 28
  },
  callText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  Availability: {
    color: Colors.purple,
    fontSize: 18,
    fontFamily: theme.MEDIUM,
    marginTop:10,
    top:10
  

  },
  Availablestyle: {
    flexDirection: 'row',
  },
  viewall: {
    fontSize: 10,
    color: Colors.purple,
    fontFamily: theme.MEDIUM,
    marginRight: 10,
    top:10


  },
  Viewallstyle: {
    flexDirection: 'row',
    marginTop:10,
   
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Oct26: {
    backgroundColor: Colors.purple,
    borderRadius: 43,
    padding: 5,
    width: 83,
    height: 31,

  },
  Oct26style: {
    textAlign: 'center',
    color: Colors.White
  },
  Oct28style: {
    color: Colors.purple,
    textAlign: 'center'
  },
 MainView: { 
  justifyContent: 'space-evenly', 
  paddingTop: 20, 
  flexDirection: 'row', 
  marginLeft: 5, 
  marginRight: 5 
},
  Oct28: {
    width: 83,
    height: 31,
    borderWidth: 1,
    borderColor: Colors.cream,
    borderRadius: 43,
    padding: 5,

  },
  Image1: {
    borderRadius: 10,
    width: 67,
    height: 67,
    backgroundColor: Colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  Textingstyle: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  Prepare: {
    color: Colors.purple
  },
  Vectorimage: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  Theyaresaying: {
    fontFamily: theme.MEDIUM,
    fontSize: 18,
    color: Colors.purple
  },
  Viewall: {
    fontSize: 12,
    color: Colors.darkgray
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 10,
    color: '#0C0F20'
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginRight: 20
  },
  ImageStyle: {
    height: 64,
    width: 64,
    marginLeft: 13
  },

  notificationText: {
    color: '#999',
    fontSize: 14,
  },
  TextStyle1: {
    fontWeight: 400,
    fontSize: 14,
    color: '#303535',
    marginLeft: 15
  },

  Yellowstars: {
    width: 62,
    height: 8,
    marginLeft: 10,
    marginTop: 5
  },
  margin: {
    marginLeft: 10,
    flex: 1
  },
  Txtstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 12,
    color: Colors.purplish,
    fontWeight: 400,
    marginLeft: 10
  },
  TextStyle: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: 'Poppins-Medium'
  },
  Imagestyle: {
    flexDirection: 'row'
  },
  Sayingstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Flex: {
    flexDirection: 'row'
  },
  Margin: {
    marginTop: 10
  },
  Readmore: {
    color: Colors.Black,
    fontFamily: theme.MEDIUM,
    marginTop: 5,
    marginLeft: 5
  },
  imagestyle: {
    width: 63,
    height: 8,
    marginBottom: 10
  },
  Heartstyle: {
    height: 10,
    width: 12
  },
  Text: {
    fontSize: 14,
    fontFamily: theme.MEDIUM,
    color: Colors.darkgray,
    marginLeft: 5

  },
  Location1: {
    borderRadius: 43,
    borderColor: Colors.Blue,
    padding: 5,
    backgroundColor: Colors.Lightblue,
    width: 107,
    height: 28,
    alignItems: 'center'
  },
  Imagestyle1: {
    width: '100%',



  }



})
export default Styles