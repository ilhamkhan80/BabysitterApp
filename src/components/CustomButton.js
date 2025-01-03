import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../themes/Colors'
import theme from '../utils/Constants'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.border, props.customStyle]} onPress={props.onPress}>
      <Text style={[styles.textstyle,props.customstyle]}>{props.tittle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  border: {
    backgroundColor: Colors.purple,
    borderRadius: 24,
    padding: 12,
    justifyContent:'center',
    alignSelf:'center',
    width: 188,
    height:40,
    marginTop: 30,
    marginBottom:20
},
textstyle: {
    color: Colors.White,
    alignSelf: 'center',
    textAlign:'center',
},

})