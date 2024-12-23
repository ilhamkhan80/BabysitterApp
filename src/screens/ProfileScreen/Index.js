import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
  const renderDetails=()=>{
    switch(steps){
      case "About":
        return(
                <View style={Styles.margin}>
            <Text style={Styles.Experiencetxt}>About:</Text>
            <View style={Styles.Addresstyle}>
              <View>
              <Text>
              Nemo enim ipsam voluptatem quia voluptas sit             </Text>
              <Text>aspernatur aut odit aut fugit, sed quia </Text>
              <Text>consequuntur ma</Text>
              <Text style={Styles.Readmore}>Read more....</Text>
              </View>
              </View>
          </View>
        )
        case "Location":
          return(
          <View>
               <View>
        <Text style={Styles.Experiencetxt}>Location:</Text>
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
        </View>
      </View>
          </View>
        ) 
      case "Reviews":
        return(
          <View>
          <View style={{padding:10}}>
            <View style={Styles.Sayingstyle}>
          <Text style={Styles.Theyaresaying}>They are Saying.....</Text>
          <View>
          <Text style={Styles.Viewall}>View All</Text>
          </View>
          </View>
          </View>
          <View style={Styles.Flex}>
            <View>
            <Image style={{height:64,width:64}} source={require('../../images/Man.png')}/>
            
            </View>
            <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Marvin McKinney</Text>
                            <Text style={Styles.time}>4 days ago</Text>
                        </View>
                        <View style={Styles.Flex}>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>

                        </View>
                    </View>
                 
          </View>
          <View style={{marginTop:10}}>
                      <Text>Nemo enim ipsam voluptatem quia voluptas sit{"\n"} aspernatur aut odit aut fugit, sed quia{"\n"} consequuntur ma</Text>
                    </View>
                    <View style={Styles.Margin}>

                    <View style={Styles.Flex}>
            <Image style={{height:64,width:64}} source={require('../../images/Man1.png')}/>
            
            <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Wade Warren</Text>
                            <Text style={Styles.time}>3 days ago</Text>
                        </View>
                        <View style={Styles.Flex}>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>

                        </View>
                    </View>
                 
          </View>
          <View style={Styles.Margin}>
                      <Text>Nemo enim ipsam voluptatem quia voluptas sit{"\n"} aspernatur aut odit aut fugit, sed quia{"\n"} consequuntur ma</Text>
                    </View>
                    </View>
                    <View style={{marginTop:10}}>
                    <View style={Styles.Flex}>
            <Image style={{height:64,width:64}} source={require('../../images/Man2.png')}/>
            
            <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Arlene McCoy</Text>
                            <Text style={Styles.time}>2 days ago</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>
                          <Icon name='star' type='AntDesign' color='yellow'/>

                        </View>
                    </View>
                 
          </View>
          <View style={Styles.Margin}>
                      <Text>Nemo enim ipsam voluptatem quia voluptas sit{"\n"} aspernatur aut odit aut fugit, sed quia{"\n"} consequuntur ma</Text>
                    </View>
                    </View>
        </View>
        )
      }



    }
  

  return (
    <ScrollView style={{ padding: 5, backgroundColor: 'white',flex:1 }}>

      <View style={Styles.iconstyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrowleft" type="AntDesign" color="black" size={25} />
        </TouchableOpacity>
        <Icon name="bell" type="Feather" color="black" size={23} />
      </View>
      <View style={Styles.container}>
        <Image
          source={require('../../images/image1.png')}
          style={Styles.profileImage}
        />
        <View style={Styles.userInfo}>
          <Text style={Styles.userName}>Ana Holmes</Text>
          <View style={Styles.locationRow}>
            <Icon name="location" type="Ionicons" color={Colors.Black} size={15} />
            <Text style={Styles.locationText}>location</Text>
          </View>
          <View style={Styles.priceRow}>
            <Text style={Styles.price}>5$</Text>
            <Text style={Styles.priceDetails}>/hr | 10 km</Text>
          </View>
          <View style={Styles.likesRow}>
            <Icon name="heart" type="AntDesign" color="red" size={15} />
            <Text style={Styles.likesText}>1.2k</Text>
          </View>
        </View>
        <View style={Styles.rightSection}>
          <View style={Styles.ratingRow}>
            <Icon name="star" type="FontAwesome" color="yellow" size={14} />
            <Icon name="star" type="FontAwesome" color="yellow" size={14} />
            <Icon name="star" type="FontAwesome" color="yellow" size={14} />
            <Icon name="star" type="FontAwesome" color="yellow" size={14} />
            <Icon name="star-half" type="FontAwesome" color="yellow" size={14} />
          </View>
          <TouchableOpacity style={Styles.callButton}>
            <Icon name="call" type="Ionicons" color="white" size={14} />
            <Text style={Styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={Styles.Experiencetxt}>Experience</Text>
        <Text style={Styles.Txtstyle}>  6 years with newborn and children up to 15 years</Text>
          <View style={{marginTop:10}}>
        <Text style={Styles.Experiencetxt}>Age</Text>
        <Text style={Styles.Txtstyle}>  20 Years</Text>
        </View>
        
      </View>

       

        <View style={Styles.Aboutstyle}>
          <TouchableOpacity style={ steps === "About" ? Styles.Location : null} onPress={() => setSteps("About")}>
            <Text style={steps === "About" ? Styles.Locationstyle : Styles.AboutStyle}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setSteps("Location")}style={ steps === "Location" ? Styles.Location : null}>
            <Text style={steps === "Location" ? Styles.Locationstyle : Styles.AboutStyle}>Location</Text>
          </TouchableOpacity>
          <View style={Styles.Flexreviews}>
            <TouchableOpacity style={ steps === "Reviews" ? Styles.Location : null}  onPress={()=>setSteps("Reviews")}>
              <Text style={steps === "Reviews" ? Styles.Locationstyle : Styles.AboutStyle}>Reviews (42)</Text>
            </TouchableOpacity>
          </View>

        </View>
        {renderDetails()}



      <View style={[Styles.Availablestyle,{flexDirection:'column'}]}>
        <View style={Styles.Viewallstyle}>
        <Text style={Styles.Availability}>Availability</Text>
        <Text style={Styles.viewall}>View All</Text>
    
        </View>
        <View style={[Styles.flex,{gap:4,padding:10,paddingBottom:20}]} >
          <View style={Styles.Oct26}>
            <Text style={Styles.Oct26style}>26 Oct</Text>
          </View>
          <View  style={Styles.Oct26}>
            <Text style={Styles.Oct26style}>27 Oct</Text>
          </View>

          <View style={Styles.Oct28}>
            <Text style={Styles.Oct28style}>28 Oct</Text>
          </View>
          <View  style={Styles.Oct26}>
            <Text style={Styles.Oct26style}>29 Oct</Text>
          </View>

        </View>
        
      </View>
      <View style={[Styles.flex,{justifyContent:'space-evenly',paddingTop:20}]}>
      <View style={Styles.Image1}>
        <Image source={require('../../images/Vectorimage1.png')}/>
        </View>
        <View style={Styles.Image1}>
        <Image source={require('../../images/Vectorimage2.png')}/>
        </View>
        <View style={Styles.Image1}>
        <Image source={require('../../images/Vectorimage3.png')}/>
        </View>
        <View style={Styles.Image1}>
        <Image source={require('../../images/Vectorimage4.png')}/>
        </View>
        <View style={Styles.Image1}>
        <Image source={require('../../images/Vectorimage5.png')}/>
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
      <Image source={require('../../images/Vectorimage6.png')}/>
      <CustomButton tittle='Book Babysitter'onPress={()=>navigation.navigate('BookNow')} customStyle={{width:300,marginRight:10,backgroundColor:Colors.purple}}/>
     </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
