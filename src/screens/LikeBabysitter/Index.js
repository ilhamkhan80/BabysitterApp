import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import Styles from '../LikeBabysitter/Style'
import Icon from '../../themes/Icons'
import theme from '../../utils/Constants'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const LikeBabysitter = () => {
    const navigation = useNavigation()
    const persons = [{
        Image: require('../../images/image1.png'),
        name: 'Ana Holmes',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'


    },
    {
        Image: require('../../images/image2.png'),
        name: 'Vilma Nunez',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'


    },
    {
        Image: require('../../images/image3.png'),
        name: 'Ana Holmes',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'


    },
    {
        Image: require('../../images/image4.png'),
        name: 'Vilma Nunez',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'


    },
    {
        Image: require('../../images/image1.png'),
        name: 'Ana Holmes',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'

    },
    {
        Image: require('../../images/image4.png'),
        name: 'Vilma Nunez',
        discription: 'Lorem ipsum lomerujh kkhk',
        price: '10$'


    },]

    return (
        <View style={Styles.View}>
            <View style={Styles.LikeBabysitter}>
                <Text style={Styles.LikeBabysitterText}>
                    Likes Babysitter
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{ position: 'absolute', right: 20,top:42 }}>
                    <Image style={{width:18,height:20}} source={require('../../images/bell2.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
            <FlatList data={persons}
                scrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <View style={Styles.ListStyle}>
                            <View style={Styles.ViewStyle}>
                                <TouchableOpacity>
                                    <Image source={item.Image} />
                                </TouchableOpacity>

                                <View style={Styles.iconstyle}>
                                    <Image style={Styles.Imagestyle}source={require('../../images/heart.png')}/>
                                    <Text style={Styles.NameStyle}>{item.name}</Text>
                                    <Text style={Styles.Margin}>{item.discription}</Text>
                                    <View style={{ flexDirection: 'row',marginTop:10 }}>
                                        <Image style={{width:15.86,height:15,marginLeft:10}}source={require('../../images/Star.png')}/>
                                        <Text style={Styles.Rating}>4.7</Text>
                                        <Text style={Styles.Reviews}>(132 Reviews)</Text>
                                        <Text style={Styles.Price}> {item.price}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    
                    )
                }} />
                </View>
        </View>
    )
}

export default LikeBabysitter

const styles = StyleSheet.create({})