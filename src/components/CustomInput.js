import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from '../themes/Icons'
import { TouchableOpacity } from 'react-native'

const CustomInput = (props) => {

  return (
    <View style={[styles.buttonstyle, props.customstyle]}>

      <TextInput placeholder={props.placeholder}
        placeholderTextColor='gray'
        style={{ width: '90%', height: 42, backgroundColor: '#FFFFFF', color: 'black' }}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText} />


      {props.Icon == 'true' &&

        <TouchableOpacity onPress={props.onPressIcon}>
          <Icon name={props.name}
            style={props.style}
            type={props.type}
            size={props.size}
            color={props.color}/>
        </TouchableOpacity>
      }
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  buttonstyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    backgroundColor:'#FFFFFF'
  }
})