import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../ConfirmBooking/Style'
import Icon from '../../themes/Icons'
import Colors from '../../themes/Colors'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const ConfirmBooking = () => {
    const navigation=useNavigation()
  return (
    <ScrollView style={Styles.Flex}>
   <View style={Styles.iconstyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
        </TouchableOpacity>
        <Icon name="bell" type="Feather" color="black" size={23} />
      </View>   
      <View>
        <Text style={Styles.BookNow}>Confirm Booking</Text>
      </View>

      <View>
        <Text style={Styles.Textstyle}>Nemo enim ipsam 
        </Text>
      </View>
      <View style={Styles.Dateview}>
        <View>
        <Text style={Styles.Selecteddate}>Date & Time</Text>
        <Text style={Styles.Change}>From 17 Auguest to 19 August </Text>
        <Text  style={Styles.Change}>07:00 Am To 12:00 PM</Text>
        </View>
        <Text style={Styles.Change}>Change</Text>
      </View>
      <View style={Styles.BabySitter} >
        <View style={Styles.Babystyle}>
        <Text style={Styles.Selecteddate}>Baby Sitter Name</Text>
        <Text style={Styles.Change}>Change</Text>
        </View>

        <View style={Styles.Nemostyle}>
        <Text style={Styles.Change}>  Nemo enim ipsam 
        </Text>
        <Image style={Styles.Girlimage} source={require('../../images/girl.png')}/>
        </View>
       
      </View>
      <View style={Styles.Dateview}>
        <View>
        <Text style={Styles.Selecteddate}>Address</Text>
        <Text style={Styles.Change}>Nemo enim ipsam </Text>
        <Text  style={Styles.Change}>aspernatur aut odit aut fugit,</Text>
        <Text style={Styles.Change}>consequuntur ma</Text>
        </View>
        <Text style={Styles.Change}>Change</Text>
      </View>
      <View style={Styles.BabySitter} >
        <View style={Styles.Babystyle}>
        <Text style={Styles.Selecteddate}>Payment Method</Text>
        <Text style={Styles.Change}>Change</Text>
        </View>

        <View style={Styles.Nemostyle}>
            <View style={{flexDirection:'row',gap:10}}>
            <Image style={{width:16,height:14,marginLeft:13}} source={require('../../images/Vectoricon.png')}/>
        <Text>*********** 1289
        </Text>
        </View>
        <Image style={Styles.Paymentstyle} source={require('../../images/Payment.png')}/>
        </View>
       
      </View>
        <View>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <View style={{flexDirection:'column'}}>
            <Text style={Styles.Total}>Total</Text>
           
            <Text style={{fontSize:18,marginLeft:10}} >55$</Text>
            </View>
            <CustomButton tittle='Proceed to Pay'  customStyle={Styles.Buttonstyle}/>
            </View>

        </View>
       </ScrollView>
  )
}

export default ConfirmBooking

const styles = StyleSheet.create({})