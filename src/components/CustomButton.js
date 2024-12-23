import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../themes/Colors'
import theme from '../utils/Constants'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.border, props.customStyle]} onPress={props.onPress}>
      <Text style={styles.textstyle}>{props.tittle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    border:{backgroundColor:Colors.Blue,borderRadius:16,padding:12,justifyContent:'center',alignSelf:'center',width:'50%',marginTop:10},
    textstyle:{color:Colors.White,alignSelf:'center'},
})