import React, { useMemo, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    Button,
} from 'react-native';
import Icon from '../../themes/Icons';
import Styles from '../EditProfile/Style';
import CustomInput from '../../components/CustomInput';
import RadioGroup from 'react-native-radio-buttons-group';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfile = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [username, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Location, setLocation] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };

    const radioButtons = useMemo(() => [
        {
            id: '1',
            label: 'Male',
            value: 'male',
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
            },
            size: 25,
            color: selectedId === '1' ? '#3A4DA0' : '#d3d3d3',
            selected: selectedId === '1',
            containerStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderColor: '#d3d3d3',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                width: 160,
            },
        },
        {
            id: '2',
            label: 'Female',
            value: 'female',
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
            },
            size: 25,
            color: selectedId === '2' ? '#3A4DA0' : '#d3d3d3',
            selected: selectedId === '2',
            containerStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderColor: '#d3d3d3',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                width: 160,
            },
        },
    ], [selectedId]);

    const handleUpdateProfile = () => {
        setModalVisible(true);
    };

    return (
        <ScrollView style={{ padding: 10 }}>
            <View style={{ flex: 1 }}>
                <Image style={Styles.ImageStyle} source={require('../../images/Myprofile.png')} />
            </View>
            <View style={Styles.Icon}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="arrowleft" type="AntDesign" color="black" size={20} />
                </TouchableOpacity>
                <Icon name="bell" type="Feather" color="gray" size={23} />
            </View>
            <View style={Styles.MyProfile}>
                <Text style={Styles.Profilestyle}>Edit Profile</Text>
            </View>
            <View>
                <Image style={Styles.Image} source={selectedImage ? { uri: selectedImage } : require('../../images/image1.png')} />
                <TouchableOpacity onPress={openImagePicker}>
                    <Image style={Styles.Imagestyle} source={require('../../images/Camera.png')} />
                </TouchableOpacity>
            </View>
            <CustomInput placeholder="Name" value={username} onChangeText={setUserName} />
            <CustomInput placeholder="E-mail" value={Email} onChangeText={setEmail} />
            <CustomInput placeholder="Date Of Birth" Icon="true" name="calendar" size={25} type="Feather" />
            <CustomInput placeholder="Location" value={Location} onChangeText={setLocation} />
            <CustomInput placeholder="Phone Number" />
            <View style={Styles.margin}>
                <Text style={Styles.Experiencetxt}>Gender</Text>
            </View>
            <View style={Styles.radioGroupContainer}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout="row"
                />
            </View>
            <CustomButton
                tittle="Update Profile"
                onPress={handleUpdateProfile}
                customStyle={{ width: '90%' }}
            />
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalContent}>
                        <Image style={Styles.Modalimage} source={require('../../images/Modalimage.png')} />

                        <Text style={Styles.modalText}>Added Sucessfully</Text>
                        <Text style={Styles.Loremtextstyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{"\n"}   purusorem ipsum dolor sit amet, consectetur adipiscing elit ut{"\n"}</Text>
                        <Text style={Styles.Loremtextstyle}>aliquam,.</Text>
                        <CustomButton tittle='close' customStyle={Styles.Buttonstyle} onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({



});
