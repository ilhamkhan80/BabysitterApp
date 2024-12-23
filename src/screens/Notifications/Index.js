import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../themes/Icons'
import Styles from './Style'
import { useNavigation } from '@react-navigation/native'


const Notifications = () => {
    const navigation = useNavigation()


    return (

        <ScrollView >
            <View style={Styles.Iconstyle}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name='arrow-back-outline' type='Ionicons' color='black' />
                </TouchableOpacity>
                <Text style={Styles.Notificationstyle}>Notification</Text>
            </View>
            <View style={Styles.Todaystyle}>
                <Text style={Styles.Today}>Today</Text>
            </View>
            <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image1.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image2.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>Booked appointment on monday. Sep 20
                            at 11 am.</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image3.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.Todaystyle}>
                <Text style={Styles.Today}>This Week</Text>
            </View>
            <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image4.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>   <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image1.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>   <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image2.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>   <View style={Styles.card}>
                <View style={Styles.flex}>
                    <Image
                        style={Styles.image}
                        source={require('../../images/image3.png')}
                    />

                    <View style={Styles.margin}>
                        <View style={Styles.Txtstyle}>
                            <Text style={Styles.name}>Vilma Nunez</Text>
                            <Text style={Styles.time}>2h ago</Text>
                        </View>

                        <Text style={Styles.notificationText}>liked your profile</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Notifications

const styles = StyleSheet.create({

});

