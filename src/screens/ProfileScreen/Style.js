import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors'





const Styles = StyleSheet.create({
  iconstyle: { flexDirection: 'row', justifyContent: 'space-between', margin: 10 },
  view: { flexDirection: 'row' },
  textstyle: { fontFamily: theme.BOLD, color: Colors.Blue, fontSize: 18 },
  location: { fontFamily: theme.MEDIUM },
  price: { color: Colors.Black },
  hours: { color: Colors.gray },
  flexDirection: { flexDirection: 'column' },
  flex: { flexDirection: 'row' },
  call: { backgroundColor: Colors.green, padding: 7, borderRadius: 13, flexDirection: 'row', gap: 5 },
  callstyle: { color: Colors.White },
  IconStyle: { marginLeft: 7, flexDirection: 'row' },
  Experiencetxt: { color: Colors.Blue, fontSize: 18, marginLeft: 10 },
  Txtstyle: { fontSize: 12, marginLeft: 10 },
  Aboutstyle: { flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: 'white', borderRadius: 11, padding: 10, shadowOpacity: 10 },
  AboutStyle: { color: Colors.Black, fontFamily: theme.BOLD },
  Locationstyle: { color: Colors.Blue, textAlign: 'center' },
  Flexreviews: { flexDirection: 'row', alignItems: 'center' },
  Numberstyle: { color: Colors.gray },
  Location: { borderRadius: 43, borderColor: Colors.Blue, padding: 5, backgroundColor: Colors.Lightblue, width: 107, height: 28 },
  Addresstyle: { flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: Colors.White, borderRadius: 10 },
  margin: { margin: 10 },
  callButton: { backgroundColor: '#2ECC71', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: Colors.green, padding: 7, borderRadius: 13 },
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
    fontSize: 14,
    color: Colors.gray,
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
    color: Colors.gray,
    marginLeft: 5,
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
  ratingRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  callButton: {
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  callText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  Availability: { color: Colors.purple, fontSize: 18, fontFamily: theme.MEDIUM },
  Availablestyle: { backgroundColor: Colors.cream, flexDirection: 'row', width: 354, height: 100, paddingTop: 18 },
  viewall: { fontSize: 10, color: Colors.purple, fontFamily: theme.MEDIUM, marginRight: 10 },
  Viewallstyle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 },
  Oct26: { backgroundColor: Colors.purple, borderRadius: 43, padding: 5, width: 83, height: 31 },
  Oct26style: { textAlign: 'center', color: Colors.White },
  Oct28style: { color: Colors.purple, textAlign: 'center' },
  Oct28: { width: 83, height: 31, borderWidth: 1, borderColor: Colors.cream, borderRadius: 43, padding: 5 },
  Image1: {
    borderRadius: 10, width: 67, height: 67, backgroundColor: Colors.cream, justifyContent: 'center',
    alignItems: 'center',
  },
  Textingstyle: { flexDirection: 'row', padding: 20, justifyContent: 'space-between' },
  Prepare: { color: Colors.purple },
  Vectorimage: { marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10 },
  Theyaresaying: { fontFamily: theme.MEDIUM, fontSize: 18, color: Colors.purple },
  Viewall: { fontSize: 12, color: Colors.darkgray },
  name: { fontSize: 16,fontFamily: 'Roboto-Bold'},
  time: { fontSize: 12,color: '#999',},
  notificationText: { color: '#999',fontSize: 14,},
  margin: { marginLeft: 10, flex: 1 },
  Txtstyle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,fontSize:12},
  TextStyle: { fontSize: 14, color: Colors.gray, fontFamily: 'Poppins-Medium' },
  Imagestyle: { flexDirection: 'row' },
  Sayingstyle:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  Flex:{flexDirection:'row'},
  Margin:{marginTop:10},
  Readmore:{color:Colors.Black,fontFamily:theme.BOLD},


})
export default Styles