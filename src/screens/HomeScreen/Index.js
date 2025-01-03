import React, { useEffect, useRef } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../themes/Icons';
import Styles from '../HomeScreen/Style';
import theme from '../../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
const HomeScreen = () => {

  const navigation = useNavigation();
  const persons = [
    {
      Image: require('../../images/image1.png'),
      name: 'Ana Holmes',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
    {
      Image: require('../../images/image2.png'),
      name: 'Vilma Nunez',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
    {
      Image: require('../../images/image3.png'),
      name: 'Ana Holmes',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
    {
      Image: require('../../images/image4.png'),
      name: 'Vilma Nunez',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
    {
      Image: require('../../images/image1.png'),
      name: 'Ana Holmes',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
    {
      Image: require('../../images/image4.png'),
      name: 'Vilma Nunez',
      discription: 'Lorem ipsum lomerujh kkhk',
      price: '10$',
    },
  ];

  return (
    <View style={Styles.Mainview}>
      <View>
        <MapView

          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ height: 300, width: '100%' }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>

        <View style={Styles.overlay}>
          <View style={Styles.inputContainer}>
            <Image style={Styles.Imagestyle} source={require('../../images/search.png')} />
            <TextInput
              style={Styles.inputStyle}
              placeholder="Search..."
            />
            <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
              <Image
                style={Styles.iconStyle}
                source={require('../../images/Icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.Linestyle} />
      <View style={Styles.Babysitter}>
        <View style={Styles.mainview}>
          <Text style={Styles.babysitterstyle}>Babysitters near you</Text>
        </View>
        <TouchableOpacity>
          <Text style={Styles.txtstyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={persons}
        scrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <View style={Styles.liststyle}>


              <TouchableOpacity style={Styles.viewstyle} onPress={() => navigation.navigate('ProfileScreen')}>
                <Image source={item.Image} />
                <View style={Styles.iconstyle}>
                  <Icon name="heart" color="#FF5166" CustomStyle={{ alignSelf: 'flex-end' }} />
                  <Text style={{ fontFamily: theme.BOLD }}>{item.name}</Text>
                  <Text style={Styles.discription}>{item.discription}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 15, width: 15 }} source={require('../../images/Star.png')} />
                    <Text style={{ fontFamily: theme.BOLD, marginLeft: 10 }}>4.7</Text>
                    <Text style={Styles.Reviews}>(132 Reviews)</Text>
                    <Text style={Styles.Price}>{item.price}</Text>
                  </View>
                </View>

              </TouchableOpacity>


            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
