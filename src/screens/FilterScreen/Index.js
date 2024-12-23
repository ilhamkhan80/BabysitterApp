import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Styles from '../FilterScreen/Style';
import Icon from '../../themes/Icons';
import Slider from '@react-native-community/slider';
import Colors from '../../themes/Colors';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../components/CustomButton';

const FilterScreen = () => {
  const [babyChecked, setBabyChecked] = useState(false);
  const [smallKid1Checked, setSmallKid1Checked] = useState(false);
  const [smallKid2Checked, setSmallKid2Checked] = useState(false);
  const [kidChecked, setKidChecked] = useState(false);
  const [teenageChecked, setTeenageChecked] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>
      <View style={Styles.Iconstyle}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-back-outline" type="Ionicons" color="black" />
        </TouchableOpacity>
        <Text style={Styles.Notificationstyle}>Notification</Text>
      </View>
      <View style={Styles.Experience}>
        <Text style={Styles.Experiencestyle}>Experience</Text>
      </View>
      <View style={Styles.Sliderstyle}>
        <Slider
          style={{ width: 300, height: 20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={Colors.purple}
          maximumTrackTintColor="white"
          thumbTintColor={Colors.purple}
        />
        <View style={Styles.Lowstyle}>
          <Text style={Styles.Lowexperience}>Low Experience</Text>
          <View>
            <Text style={Styles.Lowexperience}>High Experience</Text>
          </View>
        </View>
      </View>
      <View style={Styles.Experience}>
        <Text style={Styles.Experiencestyle}>Experience with children with</Text>
        <View style={Styles.Special}>
          <Text style={Styles.Experiencestyle}>special needs</Text>
          <View>
            <TouchableOpacity>
              <Icon name="toggle-sharp" type="Ionicons" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={Styles.Ages}>Experience with different ages</Text>
      </View>
      <View style={Styles.Babystyle}>
        <Text style={Styles.Baby}>Baby</Text>
        <View>
          <CheckBox
            value={babyChecked}
            onValueChange={setBabyChecked}
          />
        </View>
      </View>
      <View style={Styles.Babystyle}>
        <Text style={Styles.Baby}>Small Kid (1-3)</Text>
        <View>
          <CheckBox
            value={smallKid1Checked}
            onValueChange={setSmallKid1Checked}
          />
        </View>
      </View>
      <View style={Styles.Babystyle}>
        <Text style={Styles.Baby}>Small Kid (3-6)</Text>
        <View>
          <CheckBox
            value={smallKid2Checked}
            onValueChange={setSmallKid2Checked}
          />
        </View>
      </View>
      <View style={Styles.Babystyle}>
        <Text style={Styles.Baby}>Kid (9-12)</Text>
        <View>
          <CheckBox
            value={kidChecked}
            onValueChange={()=>setKidChecked(!kidChecked)}
          />
        </View>
      </View>
      <View style={Styles.Babystyle}>
        <Text style={Styles.Baby}>Teenage (12-15)</Text>
        <View>
          <CheckBox
            value={teenageChecked}
            onValueChange={setTeenageChecked}
          />
        </View>
      </View>
      <View style={Styles.Experience}>
        <Text style={Styles.Experiencestyle}>Ages</Text>
      </View>
      <View style={Styles.Sliderstyle}>
        <Slider
          style={{ width: 350, height: 20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={Colors.purple}
          maximumTrackTintColor="white"
          thumbTintColor={Colors.purple}
        />
        <View style={Styles.Lowstyle}>
          <Text style={Styles.Lowexperience}>16 Years Old</Text>
          <View>
            <Text style={Styles.Lowexperience}>60 Years Old</Text>
          </View>
        </View>
      </View>
      <CustomButton tittle="Save filters" customStyle={{ width: '90%', marginTop: 20 }} />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
