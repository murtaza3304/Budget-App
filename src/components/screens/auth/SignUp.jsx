import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SignUpSignInBg from './SignUpSignInBg';
import theme from '../../../assets/themes/theme';
import Xml from '../../../assets/icons/Xml';
import {SvgXml} from 'react-native-svg';
import ReusableButton from './Button';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';

const SignUp = () => {
  const navigation = useNavigation();

  const CodeGenerate = () => {
    navigation.navigate('LoginVerificationCode');
  };

  const LoginScreen = () => {
    navigation.navigate('Login');
  };

  const imageSource = require('../../../assets/images/logo.png');

  return (
    <>
      <View style={{width: '100%', backgroundColor: 'red'}}>
        <SignUpSignInBg imageSource={imageSource} />
      </View>
      <View style={styles.container}>
        {/* bgtransparent */}
        <View style={styles.bgView}></View>
        <ScrollView>
          {/* Content */}
          <View style={styles.content}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <View style={styles.inputAndLabelContainer}>
                <View style={styles.FirstName}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="First Name"></TextInput>
                </View>
                <View style={styles.FirstName}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Last Name"></TextInput>
                </View>
              </View>
              <View style={styles.EmailContainer}>
                <Text style={styles.Email}>Email</Text>
                <TextInput
                  style={styles.EmailInput}
                  placeholder="Email"></TextInput>
              </View>
              {/* start phone container*/}
              <View style={styles.PhoneNoContainer}>
                <View>
                  <Text style={styles.label}>Phone Number</Text>
                </View>
                <View style={styles.ForDirectionRow}>
                  {/* SVGImage */}
                  <SvgXml xml={Xml.CountryLogo} style={styles.CountryLogo} />
                  <SvgXml xml={Xml.BottomArrow} style={styles.BottomArrow} />
                  <Text style={styles.twoplus}>+2</Text>
                  <TextInput
                    placeholder="Input Number"
                    style={styles.inputfornumber}></TextInput>
                </View>
              </View>
            </KeyboardAvoidingView>
            <ReusableButton
              title="Continue"
              style={styles.Btn}
              onPress={() => CodeGenerate()}
            />
            <View
              style={{width: '82%', alignItems: 'flex-start', marginLeft: 20}}>
              <TouchableOpacity
                style={styles.CheckBoxButton}
                onPress={() => PressCheckBox()}>
                <SvgXml
                  xml={Xml.CheckBoxImage}
                  style={styles.checkBoxContainer}></SvgXml>
                <Text
                  style={{
                    color: theme.color.darkblue,
                    fontFamily: theme.fonts.tinosBold,
                  }}>
                  I agree with the Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text style={{color: theme.color.black}}>
                Already Have An Account?{' '}
              </Text>
              <TouchableOpacity
                style={styles.loginBottomButton}
                onPress={() => LoginScreen()}>
                <Text style={{color: theme.color.brown}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    color: 'black',
  },
  bgView: {
    width: '100%',
    height: Dimensions.get('window').height * 0.45,
  },
  content: {
    width: '100%',

    alignItems: 'center',
    marginTop: 30,
  },
  inputAndLabelContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  FirstName: {
    marginRight: 35,
  },

  input: {
    width: '125%',
    // backgroundColor: 'red',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
  },
  label: {
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
  },
  EmailContainer: {
    marginTop: 13,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'start',
    paddingLeft: 45,
  },
  Email: {
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
  },
  EmailInput: {
    width: '90%',
    // backgroundColor: 'green',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
  },
  PhoneNoContainer: {
    marginTop: 13,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'start',
    paddingLeft: 45,
    // backgroundColor: 'red'
  },
  ForDirectionRow: {
    flexDirection: 'row',
    width: '90%',
    // justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
  },
  CountryLogo: {
    width: 20,
    height: 20,
    // paddingHorizontal: 20,
  },
  inputfornumber: {
    paddingHorizontal: 35,
  },
  BottomArrow: {
    marginHorizontal: 5,
  },
  twoplus: {
    marginHorizontal: 5,
    fontFamily: theme.fonts.tinosBold,
    color: theme.color.black,
  },
  Btn: {
    width: '80%',
    paddingHorizontal: 30,
    backgroundColor: theme.color.lightblue,
    color: theme.color.black,
    borderRadius: 6,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  footer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.color.bgcolor,
    paddingBottom: 10,
    marginTop: 20,
    paddingVertical: 10,
  },
  loginBottomButton: {
    fontFamily: theme.fonts.tinosBold,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },

  // CheckBox Style
  CheckBoxButton: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginRight: 12,
    borderRadius: 8,
  },
  KeyboardAvoidingView:{
    width: '100%'
  }
});
