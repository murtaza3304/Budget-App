// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const justForYouStyle = ({ image, title, forYOuImageStyle, forYouTitleStyle, justForYouStyle }) => {
  return (
    <View style={[styles.ForYou, justForYouStyle ]}>
    <TouchableOpacity>
      <Image resizeMode='contain' style={[styles.image, forYOuImageStyle]} source={image}/>
      </TouchableOpacity>
      <TouchableOpacity><Text style={[styles.title, forYouTitleStyle]}>{title}</Text></TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
    ForYou: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 6,
    marginTop: 18,
    backgroundColor:"transparent",
  height:150,
  alignItems:"center",
  width:150
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

export default justForYouStyle;
