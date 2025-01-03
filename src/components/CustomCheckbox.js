import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import theme from '../utils/Constants';
import Colors from '../themes/Colors';
import Icon from '../themes/Icons';
const CustomCheckbox = ({ isChecked, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Icon name="cross" type="Entypo" color={Colors.purple} size={16} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    color:Colors.Atfernoon
  },
  checkbox: {
    width: 25,
    height: 21,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Atfernoon,
    borderColor: Colors.Atfernoon,
    marginRight: 10,
  },
  checked: {
    backgroundColor: Colors.Atfernoon,
    borderColor: Colors.Atfernoon,
  },
  label: {
    fontSize: 16,
    color: Colors.Atfernoon,
  },
});

export default CustomCheckbox;
