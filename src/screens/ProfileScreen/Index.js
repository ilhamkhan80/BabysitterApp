import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from '../../themes/Icons';
import Styles from '../ProfileScreen/Style';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../themes/Colors';
import CustomButton from '../../components/CustomButton';
import theme from '../../utils/Constants';

const ProfileScreen = () => {
  const [steps, setSteps] = useState("About")
  const navigation = useNavigation();
  const renderDetails = () => {
    switch (steps) {
      case "About":
        return (
          <View style={Styles.margin}>
            <Text style={Styles.Experiencetxt}>About:</Text>
            <View style={Styles.Addresstyle}>
              <View>
                <Text style={Styles.AboutText}>
                  Nemo enim ipsam voluptatem quia voluptas sit</Text>
                <Text style={Styles.AboutText}>aspernatur aut odit aut fugit, sed quia </Text>
                <Text style={Styles.AboutText}>consequuntur ma</Text>
                <Text style={Styles.Readmore}>Read more....</Text>
              </View>
            </View>
          </View>
        )
      case "Location":
        return (
          <View>
            <View>
              <Text style={[Styles.Experiencetxt, { marginLeft: 10, marginTop: 10 }]}>Location:</Text>
              <View>
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  style={{ height: 180, width: '95%', alignSelf: 'center' }}
                >
                  <Marker
                    coordinate={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                    }}
                  />
                </MapView>
                <View style={Styles.margin}>
                  <Text style={[Styles.Experiencetxt, { marginTop: 19, marginRight: 5 }]}>Address</Text>
                  <View style={Styles.Viewstyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                      <Text style={[Styles.Textstyle, { marginTop: 10 }]}>
                        Nemo enim ipsam
                      </Text>
                      <Image style={Styles.LocationSTYLE} source={require('../../images/Location1.png')} />
                    </View>
                    <Text style={Styles.Textstyle}>aspernatur aut odit aut fugit,</Text>
                    <Text style={Styles.Textstyle}>consequuntur ma</Text>
                  </View>

                </View>
              </View>
            </View>
          </View>
        )
      case "Reviews":
        return (
          <View>
            <View style={{ padding: 20 }}>
              <View style={Styles.Sayingstyle}>
                <Text style={Styles.Theyaresaying}>They are Saying.....</Text>
                <View>
                  <Text style={Styles.Viewall}>View All</Text>
                </View>
              </View>
            </View>
            <View style={Styles.Flex}>
              <View>
                <Image style={Styles.ImageStyle} source={require('../../images/Man.png')} />

              </View>
              <View style={Styles.margin}>
                <View style={Styles.Txtstyle}>
                  <Text style={Styles.name}>Marvin McKinney</Text>
                  <Text style={Styles.time}>4 days ago</Text>
                </View>
                <View>
                  <Image style={Styles.Yellowstars} source={require('../../images/yellowstars.png')} />
                </View>
              </View>

            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={Styles.TextStyle1}>Nemo enim ipsam voluptatem quia voluptas sit{"\n"}aspernatur aut odit aut fugit, sed quia{"\n"}consequuntur ma</Text>
            </View>
            <View style={Styles.Margin}>

              <View style={Styles.Flex}>
                <Image style={Styles.ImageStyle} source={require('../../images/Man1.png')} />

                <View style={Styles.margin}>
                  <View style={Styles.Txtstyle}>
                    <Text style={Styles.name}>Wade Warren</Text>
                    <Text style={Styles.time}>3 days ago</Text>
                  </View>
                  <View>
                    <Image style={Styles.Yellowstars} source={require('../../images/yellowstars.png')} />
                  </View>
                </View>

              </View>
              <View style={Styles.Margin}>
                <Text style={Styles.TextStyle1}>Nemo enim ipsam voluptatem quia voluptas sit{"\n"}aspernatur aut odit aut fugit, sed quia{"\n"}consequuntur ma</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={Styles.Flex}>
                <Image style={Styles.ImageStyle} source={require('../../images/Man2.png')} />

                <View style={Styles.margin}>
                  <View style={Styles.Txtstyle}>
                    <Text style={Styles.name}>Arlene McCoy</Text>
                    <Text style={Styles.time}>2 days ago</Text>
                  </View>
                  <View>
                    <Image style={Styles.Yellowstars} source={require('../../images/yellowstars.png')} />
                  </View>
                </View>

              </View>
              <View style={Styles.Margin}>
                <Text style={Styles.TextStyle1}>Nemo enim ipsam voluptatem quia voluptas sit{"\n"}spernatur aut odit aut fugit, sed quia{"\n"}consequuntur ma</Text>
              </View>
            </View>
          </View>
        )
    }



  }


  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>

      <View style={Styles.iconstyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
        </TouchableOpacity>
        <Icon name="bell" type="Feather" color="gray" size={23} />
      </View>
      <View style={Styles.container}>
        <Image
          source={require('../../images/image1.png')}
          style={Styles.profileImage}
        />
        <View style={Styles.userInfo}>
          <Text style={Styles.userName}>Ana Holmes</Text>
          <View style={Styles.locationRow}>
            <Image style={Styles.LocationStyle} source={require('../../images/location.png')} />
            <Text style={Styles.locationText}>location</Text>
          </View>
          <View style={Styles.priceRow}>
            <Text style={Styles.price}>5$</Text>
            <Text style={Styles.priceDetails}>/hr | 10 km</Text>
          </View>
          <View style={Styles.likesRow}>
            <Image style={Styles.Heartstyle} source={require('../../images/heart.png')} />
            <Text style={Styles.likesText}>1.2k</Text>
          </View>
        </View>
        <View style={Styles.rightSection}>

          <Image style={Styles.imagestyle} source={require('../../images/yellowstars.png')} />
          <TouchableOpacity style={Styles.callButton}>
            <Icon name="call" type="Ionicons" color="white" size={14} />
            <Text style={Styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={Styles.Experiencetxt}>Experience</Text>
        <Text style={Styles.Txtstyle}>6 years with newborn and children up to 15 years</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={Styles.Experiencetxt}>Age</Text>
          <Text style={Styles.Txtstyle}>20 Years</Text>
        </View>

      </View>



      <View style={Styles.Aboutstyle}>
        <TouchableOpacity style={steps === "About" ? Styles.Location : null} onPress={() => setSteps("About")}>
          <Text style={steps === "About" ? Styles.Locationstyle : Styles.AboutStyle}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSteps("Location")} style={steps === "Location" ? Styles.Location1 : null}>
          <Text style={steps === "Location" ? Styles.Locationstyle : Styles.AboutStyle}>Location</Text>
        </TouchableOpacity>
        <View style={Styles.Flexreviews}>
          <TouchableOpacity style={steps === "Reviews" ? Styles.Location1 : null} onPress={() => setSteps("Reviews")}>
            <View style={Styles.Flexreviews}>
              <Text style={steps === "Reviews" ? Styles.Locationstyle : Styles.AboutStyle}>Reviews</Text>
              <Text style={Styles.Text}>(42)</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
      {renderDetails()}


      <ImageBackground  resizeMode='stratch' style={Styles.Imagestyle1} source={require('../../images/Availability.png')}>
        <View style={[Styles.Availablestyle, { flexDirection: 'column' }]}>
          <View style={Styles.Viewallstyle}>

            <Text style={Styles.Availability}>Availability</Text>
            <Text style={Styles.viewall}>View All</Text>

          </View>
          <View style={[Styles.flex, { paddingVertical: 20,marginLeft:15,justifyContent:'space-around',margin:5}]} >
            <View style={Styles.Oct26}>
              <Text style={Styles.Oct26style}>26 Oct</Text>
            </View>
            <View style={Styles.Oct26}>
              <Text style={Styles.Oct26style}>27 Oct</Text>
            </View>

            <View style={Styles.Oct28}>
              <Text style={Styles.Oct28style}>28 Oct</Text>
            </View>
            <View style={Styles.Oct26}>
              <Text style={Styles.Oct26style}>29 Oct</Text>
            </View>

          </View>

        </View>
      </ImageBackground>



      <View style={Styles.MainView}>
        <View style={Styles.Image1}>
          <Image source={require('../../images/Vectorimage1.png')} />
        </View>
        <View style={Styles.Image1}>
          <Image source={require('../../images/Vectorimage2.png')} />
        </View>
        <View style={Styles.Image1}>
          <Image source={require('../../images/Vectorimage3.png')} />
        </View>
        <View style={Styles.Image1}>
          <Image source={require('../../images/Vectorimage4.png')} />
        </View>
        <View style={Styles.Image1}>
          <Image source={require('../../images/Vectorimage5.png')} />
        </View>
      </View>
      <View style={Styles.Textingstyle}>
        <View>
          <Text style={Styles.Prepare}>Prepare{"\n"}
            Food
          </Text>
        </View>
        <View>
          <Text style={Styles.Prepare}>Infont{"\n"}
            Caring
          </Text>
        </View>
        <View>
          <Text style={Styles.Prepare}>Vehicle</Text>
        </View>
        <View>
          <Text style={Styles.Prepare}>First aid{"\n"}
            Certified</Text>
        </View>
        <View>
          <Text style={Styles.Prepare}>Help in{"\n"}
            Study</Text>
        </View>
      </View>
      <View style={Styles.Vectorimage}>
        <Image source={require('../../images/Vectorimage6.png')} />
        <CustomButton tittle='BOOK BABYSITTER' customstyle={{fontFamily:theme.BOLD}}  onPress={() => navigation.navigate('BookNow')} customStyle={{ width: 300, marginRight: 10, backgroundColor: Colors.purple }} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
