import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import theme from '../../../../assets/themes/theme';

const FlashComponent = ({
  flashImage,
  flashTitle,
  flashImageStyle,
  flashTitleStyle,
  flashStyle,
}) => {
  return (
    <View style={[styles.Flash, flashStyle]}>
      <TouchableOpacity style={{width:'100%'}}>
        <Image
          resizeMode="contain"
          style={{...styles.flashImage, ...flashImageStyle}}
          source={flashImage}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row',display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%", marginTop: 7}}>
        <TouchableOpacity>
          <Text style={[styles.title, flashTitleStyle]}>{flashTitle}</Text>
          <Text
            disabled
            style={{
              fontSize: 8,
              color: theme.color.lightblack,
              textDecorationLine: 'line-through',
            }}>
            Rs 5000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            color: 'white',
            backgroundColor: theme.color.darkbrown,
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 9,
            marginLeft: 4,
          }}>
          <Text style={{color: theme.color.white, fontSize: 10}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.progressBody}>
        <View style={{...styles.progressFilled, width: '80%'}} />
      </View>
    </View>
  );
};

export default FlashComponent;

const styles = StyleSheet.create({
  Flash: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    // margin: 6,
    marginTop: 3,
    backgroundColor: 'transparent',
    height: 130,
    alignItems: 'center',
    width: 100,
    marginHorizontal:10
  },
  flashImage: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  flashTitle: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  progressBody: {
    width: '90%',
    backgroundColor: theme.color.lightbrown,
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  progressFilled: {
    backgroundColor: theme.color.darkbrown,
    height: '100%',
    borderRadius: 5,
  },
});
