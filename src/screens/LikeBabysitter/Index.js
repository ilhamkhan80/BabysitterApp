import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import Styles from '../LikeBabysitter/Style'
import Icon from '../../themes/Icons'
import theme from '../../utils/Constants'
import { useNavigation } from '@react-navigation/native'

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
            <View style={Styles.LikeBbabysitter}>
                <View style={Styles.Likebaby} >
                    <Text style={Styles.likebabysitter} >Likes Babysitter</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} >
                    <Icon name="bell" type="Feather" color="black" size={23} />

                </TouchableOpacity>
            </View>
            <FlatList data={persons}
                scrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <View style={Styles.liststyle}>
                            <View style={Styles.viewstyle}>
                                <TouchableOpacity>
                                    <Image source={item.Image} />
                                </TouchableOpacity>

                                <View style={Styles.iconstyle}>
                                    <Icon name='heart' color='red' CustomStyle={{ alignSelf: 'flex-end' }} />
                                    <Text style={Styles.Namestyle}>{item.name}</Text>
                                    <Text style={Styles.margin}>{item.discription}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' color='yellow' />
                                        <Text>4.7</Text>
                                        <Text>  (132 Reviews)</Text>
                                        <Text style={{ marginLeft: 20 }}>    {item.price}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

export default LikeBabysitter

const styles = StyleSheet.create({})