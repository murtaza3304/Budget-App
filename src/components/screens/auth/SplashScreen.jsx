import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';

const SplashScreen = ({navigation}) => {

  const handleGetStartedPress = () => {
    navigation.navigate('WellCome');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/ss.png')}
      style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <TouchableOpacity onPress={()=>handleGetStartedPress()} style={{maxWidth: "90%"}}>
        <LinearGradient
          colors={theme.color.linearGradient2}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.Btn1}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 16,
              fontFamily: 'Tinos-Bold',
            }}
            >
            Get Started
          </Text>
          <SvgXml xml={Xml.rightArrow} style={styles.rightArrow} />
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Btn1: {
    width: '70%',
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
    flexDirection: 'row',
  },
  svgImageStyle: {
    width: 16,
    height: 16,
    tintColor: 'white',
  },
});
