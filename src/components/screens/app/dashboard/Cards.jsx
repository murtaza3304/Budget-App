// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Cards = ({ image, title, imageStyle, titleStyle,cardStyle }) => {
  console.log(image)
  return (
    <View style={[styles.card,cardStyle]}>
    <TouchableOpacity>
      <Image resizeMode='contain' style={[styles.image, imageStyle]} source={image}/>
      </TouchableOpacity>
      <TouchableOpacity><Text style={[styles.title, titleStyle]}>{title}</Text></TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 6,
    marginTop: 18,
    backgroundColor:"transparent",
  height:130,
  alignItems:"center",
  width:100
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius:10
    // backgroundColor:"green"
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop:5
  },
});

export default Cards;
