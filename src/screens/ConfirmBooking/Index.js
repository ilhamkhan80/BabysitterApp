import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../ConfirmBooking/Style'
import Icon from '../../themes/Icons'
import Colors from '../../themes/Colors'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import theme from '../../utils/Constants'
const ConfirmBooking = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={Styles.Flex}>
      
      <View style={Styles.iconStyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
        </TouchableOpacity>
        <Icon name="bell" type="Feather" color="black" size={23} />
      </View>
      <View>
        <Text style={Styles.BookNow}>Confirm Booking</Text>
      </View>

      <View>
        <Text style={Styles.TextStyle}>Nemo enim ipsam
        </Text>
      </View>
      <ImageBackground resizeMode='stretch' style={{ width: '100%',marginTop:40 }} source={require('../../images/background.png')}>
      <View style={{marginTop:30}}>
      <View style={Styles.DateView}>
        <View>
          <Text style={Styles.SelectedDate}>Date & Time</Text>
          <Text style={Styles.Change}>From 17 Auguest to 19 August </Text>
          <Text style={Styles.Change}>07:00 Am To 12:00 PM</Text>
        </View>
        <Text style={Styles.Change1}>Change</Text>
      </View>
      <View style={Styles.BabySitter} >
        <View style={Styles.BabyStyle}>
          <Text style={Styles.SelectedDate}>Baby Sitter Name</Text>
          <Text style={Styles.Change1}>Change</Text>
        </View>

        <View style={Styles.NemoStyle}>
          <Text style={[Styles.Change,{marginLeft:20}]}>Nemo enim ipsam
          </Text>
          <Image style={Styles.GirlImage} source={require('../../images/girl.png')} />
        </View>

      </View>
      <View style={Styles.DateView}>
        <View>
          <Text style={Styles.SelectedDate}>Address</Text>
          <Text style={Styles.Change}>Nemo enim ipsam </Text>
          <Text style={Styles.Change}>aspernatur aut odit aut fugit,</Text>
          <Text style={Styles.Change}>consequuntur ma</Text>
        </View>
        <Text style={Styles.Change1}>Change</Text>
      </View>
      <View style={Styles.BabySitter} >
        <View style={Styles.BabyStyle}>
          <Text style={Styles.SelectedDate}>Payment Method</Text>
          <Text style={Styles.Change1}>Change</Text>
        </View>

        <View style={Styles.NemoStyle}>
          <View style={Styles.FlexStyle}>
            <Image style={Styles.Payment} source={require('../../images/Vectoricon.png')} />
            <Text style={Styles.Textstyle}>*********** 1289
            </Text>
          </View>
          <Image style={Styles.PaymentStyle} source={require('../../images/Payment.png')} />
        </View>

      </View>

      </View>

      <View>
        <View style={Styles.TotalStyle}>
          <View style={Styles.FlexDirection}>
            <Text style={Styles.Total}>Total</Text>

            <Text style={Styles.Text55}>55$</Text>
          </View>
          <CustomButton tittle='PROCCED TO PAY' customstyle={{fontFamily:theme.BOLD}}  customStyle={Styles.ButtonStyle} />
        </View>

      </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default ConfirmBooking

const styles = StyleSheet.create({})