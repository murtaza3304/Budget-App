import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Xml from '../../../assets/icons/Xml';
import { SvgFromXml } from 'react-native-svg';
import theme from '../../../assets/themes/theme';
import { useNavigation } from '@react-navigation/native';


  const ImagesForProducts = ({ image, title }) => {
    const navigation = useNavigation();
    const handleImagePress = () => {
    navigation.navigate('ProductInnerPage', { image, title });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleImagePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <SvgFromXml xml={Xml.RatingStar}/>
      <Text style={styles.TextStyle}>Rating 4.5/5.203 Sold</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{color: theme.color.darkbrown, fontSize:14}}>Rs 1499</Text>
      <Text style={{textDecorationLine: "line-through", fontSize: 10, marginTop: 4}}>Rs 1499</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 240,
    width:'47%'
  
  },
  image: {
    width: '100%',
    height: 165,
    borderRadius: 8,
    marginBottom: 10,

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextStyle:{
    fontSize: 12,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    marginLeft: 3
  }
});

export default ImagesForProducts;
