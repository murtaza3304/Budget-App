import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SvgFromXml } from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';

const PendingComponent = ({ image, text1, text2 }) => {
  return (
    <View style={styles.Container}>
    <View style={styles.innerContainer}>
      <View style={styles.CardStyle}>
        <Image source={image} style= {styles.Image}/>
        <View>
          <Text style={styles.Text1}>{text1}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
      </View>
      </View> 
    </View>
  );
};

export default PendingComponent;

const styles = StyleSheet.create({
  Container: {
    // Add your container styles here
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '84%',
    
  },
  
  CardStyle:{
     flexDirection: 'row',
     borderRadius: 9,
     paddingHorizontal: 12
  },
  Image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 3,
    marginLeft: 7
  },
  Text1: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 15,
  },
  text2:{
    fontSize: 13,
    fontFamily: theme.fonts.tinosResular
  }
});
