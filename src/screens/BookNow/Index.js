import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, ImageBackground } from 'react-native';
import React, { useMemo, useState } from 'react';
import Styles from '../BookNow/Style';
import Icon from '../../themes/Icons';
import { Calendar } from 'react-native-calendars';
import Colors from '../../themes/Colors';
import { RadioGroup } from 'react-native-radio-buttons-group';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import theme from '../../utils/Constants';
const BookNow = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const handleDayPress = (day) => {
    const selectedDate = day.dateString;
    if (!startDate || moment(selectedDate).isBefore(startDate)) {
      setStartDate(selectedDate);
      setSelected({
        [selectedDate]: {
          selected: true,
          color: Colors.Black,
          textColor: Colors.Black,
          backgroundColor:Colors.purple
        },
      });
    } else {
      const rangeDates = {};
      const start = moment(startDate);
      const end = moment(selectedDate);
      for (let m = start; m.isSameOrBefore(end); m.add(1, 'day')) {
        const date = m.format('YYYY-MM-DD');
        rangeDates[date] = {
          selected: true,
          color: Colors.Atfernoon,
          textColor: Colors.Black,
          backgroundColor:Colors.gray
        };
      }
      setSelected(rangeDates);
      setStartDate(null);
    }
  };





  const [selectedButton, setSelectedButton] = useState('oneTime');
  const [selectedDay, setSelectedDay] = useState('Morning');


  const [selectedId, setSelectedId] = useState(null);


  const radioButtons = useMemo(() => [
    {
      id: '1',
      label: 'Selected',
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
    <ScrollView style={Styles.MainView}>
      <ImageBackground resizeMode='contain' style={{ width: '100%' }} source={require('../../images/background.png')}>
        <View style={Styles.iconStyle}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
          </TouchableOpacity>
          <Icon name="bell" type="Feather" color="black" size={23} />
        </View>

        <View>
          <Text style={Styles.BookNow}>Book Now</Text>
        </View>

        <View>
          <Text style={Styles.TextStyle}>Nemo enim ipsam{"\n"}voluptatem</Text>
        </View>

        <View>
          <Image style={Styles.Image} source={require('../../images/image1.png')} />
        </View>

        <View>
          <Text style={Styles.SelectedDate}>Select Date</Text>
        </View>
        <View style={Styles.View}>
          <TouchableOpacity
            style={selectedButton === 'oneTime' ? Styles.OneTimeStyle : Styles.FullTimeStyle}
            onPress={() => setSelectedButton('oneTime')}
          >
            <Text style={selectedButton === 'oneTime' ? Styles.OneTime : Styles.FullTime}>
              One Time
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedButton === 'fullTime' ? Styles.Defaultstyle : Styles.FullTimeStyle}
            onPress={() => setSelectedButton('fullTime')}
          >
            <Text style={selectedButton === 'fullTime' ? Styles.OneTime : Styles.FullTime}>
              Full Time
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>

          <Calendar
            style={styles.Calender}
            onDayPress={handleDayPress}
            markedDates={selected}
            markingType={'period'}

            minDate={moment().format('YYYY-MM-DD')}
            maxDate={moment().add(1, 'year').format('YYYY-MM-DD')}

            theme={{
              calendarBackground: Colors.Atfernoon,
              selectedDayTextColor: Colors.White,
              selectedDayBackgroundColor: Colors.purple,
              todayTextColor: Colors.White,
              // dayTextColor: Colors.hite,
              textSectionTitleColor: Colors.purple,
              // textDayFontFamily: FONT.regular,
              textDayHeaderFontSize: 12,
              textDayFontSize: 16,
              // textMonthFontFamily: FONT.semiBold,
              // textDayHeaderFontFamily: FONT.semiBold,
              arrowColor: Colors.Black,
              todayBackgroundColor: Colors.purple,
              monthTextColor: Colors.purple,
              monthTextFontsize: 16.53,
              textDisabledColor: Colors.Black,
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
          <Text style={Styles.SelectedDate1}>Select Time</Text>
        </View>
        <View style={Styles.Flex}>
          {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
            <TouchableOpacity
              key={time}
              style={selectedDay === time ? Styles.selectedStyle : Styles.unselectedStyle}
              onPress={() => setSelectedDay(time)}
            >
              <Text style={selectedDay === time ? Styles.selectedText : Styles.unselectedText}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


        <View style={{ marginTop: 20 }}>
          <View>
            <View style={Styles.FlexStyle}>
              <View>
                <Text style={Styles.FromText}>From</Text>
                <TextInput placeholder='07:00 Am' style={Styles.Marginleft} />
              </View>
              <Image style={Styles.ClockStyle} source={require('../../images/Clock.png')} />
            </View>
          </View>
          <View>
            <View style={Styles.FlexStyle}>
              <View >
                <Text style={Styles.FromText}>To:</Text>
                <TextInput placeholder='07:00 Am' style={Styles.Marginleft} />
              </View>
              <Image style={Styles.ClockStyle} source={require('../../images/Clock.png')} />
            </View>
          </View>
          <View>
            <Text style={Styles.SelectedDate1}>Children</Text>
          </View>
          <View style={Styles.FlexStyle}>
            <View>
              <Text style={Styles.FromText}>Child 1</Text>
              <TextInput placeholder='Child Name,Age' style={Styles.Marginleft} />
            </View>
          </View>
        </View>
        <View style={Styles.FlexDirection}>
          <Image style={Styles.ImageStyle} source={require('../../images/Add.png')} />
          <Text style={Styles.AddChild}>Add Another Child</Text>
        </View>
        <View style={Styles.Margin}>
          <Text style={Styles.ExperienceTxt}>Address</Text>
          <View style={Styles.AddressStyle}>
            <View >
              <Text style={Styles.AddresStyle}>
                Nemo enim ipsam
              </Text>
              <Text style={Styles.Marginleft}>aspernatur aut odit aut fugit,</Text>
              <Text style={Styles.Marginleft} >consequuntur ma</Text>
            </View>
            <View style={Styles.MarginRight}>
              <Icon name="location" type="Ionicons" />
            </View>
          </View>
        </View>
        <View style={Styles.FlexDirection}>
          <Image style={Styles.ImageStyle} source={require('../../images/Add.png')} />
          <Text style={Styles.AddChild}>Add Direction</Text>
        </View>
        <View >
          <Text style={Styles.SelectedDate1}>Note</Text>
          <TextInput style={Styles.Notes} />
        </View>
        <View style={Styles.ViewIcon}>
          <View style={Styles.IconContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Image source={require('../../images/cross.png')} style={Styles.CrossIcon} />

            </TouchableOpacity>
          </View>
          <CustomButton tittle='BOOK NOW' customstyle={{ fontFamily: theme.BOLD }} onPress={() => navigation.navigate('ConfirmBooking')} customStyle={Styles.Button} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  Calender: {

  }
});
