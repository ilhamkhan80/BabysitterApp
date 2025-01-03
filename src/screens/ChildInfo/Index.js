import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import Icon from '../../themes/Icons';
import Styles from './Style';
import CustomInput from '../../components/CustomInput';
import RadioGroup from 'react-native-radio-buttons-group';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Childinfo = () => {
    const navigation = useNavigation()
    const [selectedId, setSelectedId] = useState(null);
    const [username, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Location, setLocation] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);



    const [selectedImage, setSelectedImage] = useState(null)
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
            color: selectedId === '1' ? '#3A4DA0' : '#3A4DA0',
            selected: selectedId === '1',
            containerStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderColor: '#d3d3d3',
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                width: '40%',
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
            color: selectedId === '2' ? '#3A4DA0' : '#3A4DA0',
            selected: selectedId === '2',
            containerStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderColor: '#d3d3d3',
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                width: '40%',

            },
        },
    ], [selectedId]);

    return (
        <ScrollView style={{backgroundColor:'white',flex:1}}>
        <ImageBackground resizeMode='conatin' style={{width:'100%'}} source={require('../../images/Myprofile.png')}>

            <View style={Styles.Icon}>
                <TouchableOpacity style={{marginLeft:10}} onPress={navigation.goBack}>
                    <Icon name="arrowleft" type="AntDesign" color="black" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:10}}>
                <Icon name="bell" type="Feather" color="gray" size={23} />
                </TouchableOpacity>
            </View>
            <View style={Styles.MyProfile}>
                <Text style={Styles.ProfileStyle}>Add Child Info</Text>
            </View>
            <View>
                <Image style={Styles.Image} source={require('../../images/Child.png')} />
                <TouchableOpacity onPress={openImagePicker}>
                    <Image style={Styles.ImageStyleAlt} source={require('../../images/Camera.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30}}>
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <CustomInput placeholder="Child Name" customstyle={Styles. CustomStyle} />
            <CustomInput placeholder="Date Of Birth" Icon="true" name="calendar" size={25} type="Feather" customstyle={Styles. CustomStyle} />
            <View style={Styles.TextInput}>
                <TextInput placeholder='Additional Notes' multiline={true} style={Styles.TextStyle} />
            </View>
            </View>
            <View style={Styles.Margin}>
                <Text style={Styles.ExperienceText}>Gender

                </Text>
            </View>
            <View style={Styles.RadioGroupContainer}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout="row"
                />
            </View>
            <CustomButton
                tittle="Add Child" onPress={() => setModalVisible(true)}
                customStyle={{ width: '90%',width:312,height:44 }} />
                </View>
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={Styles.ModalContainer}>
                    <View style={Styles.ModalContent}>
                        <Image style={Styles.ModalImage} source={require('../../images/Modalimage.png')} />

                        <Text style={Styles.ModalText}>Added Sucessfully</Text>
                        <View style={{width:347}}>
                        <Text style={Styles.LoremTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{"\n"}   purusorem ipsum dolor sit amet, consectetur adipiscing elit ut{"\n"}</Text>
                        <Text style={Styles.LoremTextStyle1}>aliquam,.</Text>
                        </View>
                        <CustomButton tittle='close' customStyle={Styles.ButtonStyle} onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            </ImageBackground>
        </ScrollView>
    );
};
export default Childinfo

const styles = StyleSheet.create({})