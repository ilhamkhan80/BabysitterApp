import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../ChatScreen/Style'
const ChatScreen = () => {
  return (
    <ScrollView>
      <View style={Styles.MyProfile}>
        <Text style={Styles.Profilestyle}>Messages
        </Text>
      </View>
      <View style={Styles.Chatstyle}>
        <Image style={Styles.Girlimage} source={require('../../images/image1.png')}/>
        <Text style={Styles.Loremtextstyle}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={Styles.Timingviewstyle}>
        <Image style={Styles.Tickstyle} source={require('../../images/Tick.png')}/>
        <Text style={Styles.Timingstyle}>11:45 PM</Text>
      </View>
    <View style={Styles.Chatstyle2}>
      <Image style={Styles.Girlimage} source={require('../../images/image2.png')}/>
      <View>
      <Text style={Styles.Loremtextstyle1}>Lorem ipsum dolor sit{"\n"} amet, consectetur.</Text>
      </View>
    </View>
    <View>
    <Text style={Styles.Timingstyle1}>11:48 PM</Text>
    </View>
    <View style={Styles.Chatstyle}>
        <Image style={Styles.Girlimage} source={require('../../images/image1.png')}/>
        <Text style={Styles.Loremtextstyle}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={Styles.Timingviewstyle}>
        <Image style={Styles.Tickstyle} source={require('../../images/Tick.png')}/>
        <Text style={Styles.Timingstyle}>11:45 PM</Text>
      </View>
      <View style={Styles.Chatstyle2}>
      <Image style={Styles.Girlimage} source={require('../../images/image2.png')}/>
      <View>
      <Text style={Styles.Loremtextstyle1}>Lorem ipsum dolor sit{"\n"} amet, consectetur.</Text>
      </View>
    </View>
    <View>
    <Text style={Styles.Timingstyle1}>11:48 PM</Text>
    </View>
    <View style={Styles.Chatstyle}>
        <Image style={Styles.Girlimage} source={require('../../images/image1.png')}/>
        <Text style={Styles.Loremtextstyle}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={Styles.Timingviewstyle}>
        <Image style={Styles.Tickstyle} source={require('../../images/Tick.png')}/>
        <Text style={Styles.Timingstyle}>11:45 PM</Text>
      </View>
    <View style={Styles.Chatstyle2}>
      <Image style={Styles.Girlimage} source={require('../../images/image2.png')}/>
      <View>
      <Text style={Styles.Loremtextstyle1}>Lorem ipsum dolor sit{"\n"} amet, consectetur.</Text>
      </View>
    </View>
    <View>
    <Text style={Styles.Timingstyle1}>11:48 PM</Text>
    </View>
      <View style={Styles.Flex}>
        <Image style={Styles.Plus} source={require('../../images/Plus.png')} />
        <TextInput placeholder='Write message...' style={Styles.Textinputstyle} />
        <TouchableOpacity>
          <Image style={Styles.Arrow} source={require('../../images/Arrow.png')} />
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})