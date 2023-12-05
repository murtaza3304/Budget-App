import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import SignUpSignInBg from './SignUpSignInBg';
import theme from '../../../assets/themes/theme';
import ReusableButton from './Button';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpSuccess = () => {
  const navigation = useNavigation();

  const centerImage = {
    width: 300,  // Adjust the width as needed
    height: 400, // Adjust the height as needed
    marginBottom: 20,
    backgroundColor:'red'  };

  const Login = () => {
    navigation.navigate('Login');
  };


  const imageSource = require('../../../assets/images/Bglogo.png');

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <SignUpSignInBg imageSource={imageSource} centerImage={{height:Dimensions.get('window').height*0.24,width:Dimensions.get('window').width*0.8}}/>
      </View>
      <View style={styles.container}>
        <View style={styles.bgView} />
        <View style={styles.content}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Text style={styles.Heading}>Congratulation</Text>
            <Text style={styles.paragraph}>
              Great! Your event organization profile has been successfully generated.
            </Text>
          </View>
          <LinearGradient style={styles.BtnStyling} colors={[theme.color.brown, theme.color.darkbrown, theme.color.darkbrown,theme.color.brown]}>
            <ReusableButton title="Set up Profile" style={styles.Btn1} onPress={() => Login()} />
          </LinearGradient>
        </View>
      </View>
    </>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bgView: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
  },
  content: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  Heading: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 26,
    color: theme.color.black,
    marginBottom: 5,
  },
  paragraph: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 16,
    textAlign: 'center', // Use textAlign instead of alignContent and justifyContent
  },
  BtnStyling: {
    width: '55%',
    paddingHorizontal: 30,
    paddingVertical: 1,
    backgroundColor: theme.color.darkbrown,
    color: theme.color.black,
    fontFamily: theme.fonts.tinosBold,
    borderRadius: 6,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
