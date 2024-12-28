import React, { useRef } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../themes/Icons';
import CustomInput from '../../components/CustomInput';
import Styles from '../HomeScreen/Style';
import theme from '../../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';

const HomeScreen = () => {
  const refRBSheet = useRef();
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
      <View style={Styles.Buttonstyle}>
        <Icon name='search1' type='AntDesign' color='gray' size={20} />
        <TextInput style={Styles.Inputstyle} placeholder='Search' />
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}
        >
          <Image style={{ height: 17, width: 18 }} source={require('../../images/Icon.png')} />
        </TouchableOpacity>
      </View>

      <View >
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ height: 220, width: '100%' }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>
      </View>
      <View style={Styles.mainview}>
        <Text style={Styles.babysitterstyle}>Babysitters near you</Text>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Text style={Styles.txtstyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={450}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }} >
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <View
            style={Styles.Linestyle}
          />
        </TouchableOpacity>
        <View style={Styles.Babysitter}>
          <View style={Styles.mainview}>
            <Text style={Styles.babysitterstyle}>Babysitters near you</Text>
          </View>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Text style={Styles.txtstyle}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={persons}
          scrollEnabled={true}
          renderItem={({ item }) => {
            return (
              <View style={Styles.liststyle}>


                <View style={Styles.viewstyle}>
                  <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Image source={item.Image} />
                  </TouchableOpacity>
                  <View style={Styles.iconstyle}>
                    <Icon name="heart" color="red" CustomStyle={{ alignSelf: 'flex-end' }} />
                    <Text style={{ fontFamily: theme.BOLD }}>{item.name}</Text>
                    <Text>{item.discription}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name="star" color="yellow" />
                      <Text>4.7</Text>
                      <Text> (132 Reviews)</Text>
                      <Text style={{ marginLeft: 20 }}> {item.price}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />

      </RBSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
