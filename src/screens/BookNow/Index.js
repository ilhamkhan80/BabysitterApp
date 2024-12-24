import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import React, { useMemo, useState } from 'react';
import Styles from '../BookNow/Style';
import Icon from '../../themes/Icons';
import { Calendar } from 'react-native-calendars';
import Colors from '../../themes/Colors';
import { RadioGroup } from 'react-native-radio-buttons-group';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const BookNow = () => {
  const navigation=useNavigation()
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedId, setSelectedId] = useState(null);


  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log('Selected Date:', day.dateString);
  };
  const radioButtons = useMemo(() => [
    {
      id: '1',
      label: 'Selected',
      value: 'male',
      labelStyle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
      },
      size: 15,
      color: selectedId === '1' ? '#3A4DA0' : '#d3d3d3',
      selected: selectedId === '1',
      containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#d3d3d3',
        marginHorizontal: 8,
      },
    },
    {
      id: '2',
      label: 'Not Available',
      labelStyle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
      },
      size: 15,
      color: selectedId === '2' ? '#3A4DA0' : '#d3d3d3',
      selected: selectedId === '2',
      containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
      },
    },
  ], [selectedId]);

  return (
    <ScrollView style={{ flex: 1,padding:10 }}>
      <View style={Styles.iconstyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
        </TouchableOpacity>
        <Icon name="bell" type="Feather" color="black" size={23} />
      </View>

      <View>
        <Text style={Styles.BookNow}>Book Now</Text>
      </View>

      <View>
        <Text style={Styles.Textstyle}>Nemo enim ipsam{"\n"} voluptatem</Text>
      </View>

      <View>
        <Image style={Styles.Image} source={require('../../images/image1.png')} />
      </View>

      <View>
        <Text style={Styles.Selecteddate}>Select Date</Text>
      </View>
      <View style={Styles.View}>
        <View style={Styles.Onetimestyle}>
          <Text style={Styles.Onetime}>One Time</Text>
        </View>
        <View style={Styles.Fulltime}>
          <Text style={Styles.FullTime}>Full Time</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Calendar  style={{backgroundColor: Colors.Atfernoon}}
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: '#3A4DA0', },
          }}
          theme={{

            selectedDayBackgroundColor: '#3A4DA0',
            selectedDayTextColor: 'white',
            todayTextColor: '#3A4DA0',
            arrowColor: '#3A4DA0',
            
          }}
        />
        <View style={Styles.radioGroupContainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </View>
      </View>
      <View>
        <Text style={Styles.Selecteddate1}>Select Time</Text>
      </View>
      <View style={Styles.Flex} >
<View  style={Styles.Onetimestyle}>
  <Text style={Styles.Onetime}>Morning</Text>
</View>
<View  style={Styles.Onetimestyle1}>
  <Text  style={Styles.Onetime1}>Afternoon</Text>
</View>
<View  style={Styles.Onetimestyle1}>
  <Text  style={Styles.Onetime1}>Evening</Text>
</View>
<View  style={Styles.Onetimestyle1}>
  <Text  style={Styles.Onetime1}>Night</Text>
</View>
</View>
<View>
  <View style={Styles.Flexstyle}>
    <View>
  <Text style={Styles.Fromtext}>From</Text>
<TextInput placeholder='07:00 Am'/>
</View>
<Image style={Styles.Clockstyle}source={require('../../images/Clock.png')}/>
</View>
</View>
<View>
  <View style={Styles.Flexstyle}>
    <View>
  <Text style={Styles.Fromtext}>To:</Text>
<TextInput placeholder='07:00 Am'/>
</View>
<Image style={Styles.Clockstyle}source={require('../../images/Clock.png')}/>
</View>
</View>
<View>
        <Text style={Styles.Selecteddate1}>Children</Text>
      </View>
  <View style={Styles.Flexstyle}>
    <View>
  <Text style={Styles.Fromtext}>Child 1</Text>
<TextInput placeholder='Child Name,Age'/>
</View>
</View>
<View style={Styles.FlexDirection}>
  <Image style={Styles.Imagestyle}source={require('../../images/Add.png')}/>
  <Text style={Styles.Addchild}>Add Another Child</Text>
</View>
<View style={Styles.margin}>
            <Text style={Styles.Experiencetxt}>Address</Text>
            <View style={Styles.Addresstyle}>
              <View>
              <Text>
                Nemo enim ipsam
              </Text>
              <Text>aspernatur aut odit aut fugit,</Text>
              <Text>consequuntur ma</Text>
              </View>
              <View>
                <Icon name="location" type="Ionicons" />
              </View>
            </View>
          </View>
          <View style={Styles.FlexDirection}>
  <Image style={Styles.Imagestyle}source={require('../../images/Add.png')}/>
  <Text style={Styles.Addchild}>Add Direction</Text>
</View>
<View>
        <Text style={Styles.Selecteddate1}>Note</Text>
        <TextInput style={Styles.Notes}/>
      </View>
      <View style={Styles.ViewIcon}>
      <View style={Styles.IconContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
      <Icon name="cross" type='Entypo' color="#3A4DA0" />
      </TouchableOpacity>
    </View>
        <CustomButton tittle='Book Now' onPress={()=>navigation.navigate('ConfirmBooking')} customStyle={Styles.Button}/>
      </View>
    </ScrollView>
  );
};

export default BookNow;

const styles = StyleSheet.create({});
