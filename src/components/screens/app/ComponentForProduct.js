// CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import theme from '../../../assets/themes/theme';

const ComponentForProduct = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: item.pressed ? theme.color.brown : theme.color.grey},
      ]}
      onPress={() => {
        console.warn('yor pressed');
        onPress();
      }}>
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <SvgFromXml xml={item.svgImage} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    // width:'30%'
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    paddingLeft: 6,
  },
  iconContainer: {
    marginLeft: 10,
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ComponentForProduct;
