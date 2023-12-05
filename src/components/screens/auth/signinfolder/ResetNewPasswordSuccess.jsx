import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import SignUpSignInBg from '../SignUpSignInBg';
import theme from '../../../../assets/themes/theme';
import ReusableButton from '../Button';
import {useNavigation} from '@react-navigation/native';

const ResetNewPasswordSuccess= () => {
  
  const navigation = useNavigation()
  const Login=()=>{
    navigation.navigate('Login')
  }

  const imageSource = require('../../../../assets/images/Bglogo.png');
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <SignUpSignInBg imageSource={imageSource} centerImage={{height:Dimensions.get('window').height*0.24,width:Dimensions.get('window').width*0.8}}  />
      </View>
      <View style={styles.container}>
        <View style={styles.bgView} />
        <View style={styles.content}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Text style={styles.Heading}>Congratulations</Text>
            <Text style={styles.paragraph}>
              Great!, You have successfully generated new password, login
            </Text>
          </View>
          <View style={styles.BtnStyling}>
            <ReusableButton
              title="Login Now"
              style={styles.Btn1}
              onPress={() => Login()}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ResetNewPasswordSuccess;

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
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  Heading: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 22,
    color: theme.color.black,
    marginBottom: 15,
  },
  paragraph: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Btn1: {
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: theme.color.darkbrown,
    color: theme.color.black,
    fontFamily: theme.fonts.tinosResular,
    borderRadius: 6,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
