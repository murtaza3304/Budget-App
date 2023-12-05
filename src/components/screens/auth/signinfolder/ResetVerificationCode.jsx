import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import SignUpSignInBg from '../SignUpSignInBg';
import Xml from '../../../../assets/icons/Xml';
import {SvgXml} from 'react-native-svg';
import theme from '../../../../assets/themes/theme';
import ReusableButton from '../Button';
import {useNavigation} from '@react-navigation/native';
import { useState , useEffect} from 'react';
import { Keyboard, KeyboardAvoidingView} from 'react-native';

const ResetVerificationCode = () => {

  const [number, setNumber] = useState(""); 
  
    const handleNumberChange = (text) => { 
        if (!isNaN(text)) { 
            setNumber(text); 
        }}

  const navigation = useNavigation();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      });
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const BackButtonIcon = () => {
    navigation.navigate('SignUp');
  };

  const VerifyCode = () => {
    navigation.navigate('CreateNewPassword');
  };

  const ResendCode = () => {
    navigation.navigate(console.warn('Confirm Your Gmail'));
  };

  const imageSource = require('../../../../assets/images/logo.png');
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <SignUpSignInBg imageSource={imageSource} />
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.bgView}></View>
          <View style={styles.content}>
            <View style={{width: '100%', height: '36%'}}>
              <KeyboardAvoidingView>
                <View style={styles.BackIcon}>
                  <TouchableOpacity
                    style={styles.bgSvgIcon}
                    onPress={BackButtonIcon}>
                    <SvgXml
                      xml={Xml.ArrowForBack}
                      style={styles.ArrowForBack}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.Heading}>Verification Code</Text>
                  <Text style={styles.paragraph}>
                    Enter code send to your email address
                  </Text>
                </View>

                <View style={styles.Verify}>
                  <Text style={styles.passwordHeading}>One Time Password</Text>
                  <TextInput
                    placeholder="Enter verification code"
                    style={styles.inputforcode}
                    onChangeText={handleNumberChange} 
                keyboardType="numeric"
                    
                    />
                </View>

                <View style={styles.BtnStyling}>
                  <ReusableButton
                    title="Verify"
                    style={styles.Btn}
                    onPress={() => VerifyCode()}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ScrollView>

        
        {isKeyboardVisible ? null : (
          <View style={styles.footer}>
          <View style={[styles.footer, { position: 'sticky', marginBottom: 20 }]}>
            <Text
              style={{
                color: theme.color.black,
                fontFamily: theme.fonts.tinosResular,
              }}>
              Didn't get code?
            </Text>
            <TouchableOpacity
              style={styles.ResendBottomButton}
              onPress={() => ResendCode()}>
              <Text style={{ color: theme.color.brown }}>Resend Code</Text>
            </TouchableOpacity>
          </View>
          </View>
        )}
      </View>
      
    </>
  );
};

export default ResetVerificationCode;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bgView: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
  },
  content: {
    width: '100%',
    // height: Dimensions.get('window').height * 0.6,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'yellow'
  },
  bgSvgIcon: {
    backgroundColor: theme.color.lightblue,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  BackIcon: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
    marginTop: 25,
  },
  Heading: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 20,
    color: theme.color.black,
    fontSize: 22,
  },
  paragraph: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
    marginTop: 10,
  },
  Verify: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
    marginTop: 20,
  },
  passwordHeading: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 15,
    color: theme.color.black,
  },
  inputforcode: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
    paddingTop: 3,
  },
  Btn: {
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: theme.color.lightbtn,
    color: theme.color.black,
    fontFamily: theme.fonts.tinosResular,
    borderRadius: 6,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  BtnStyling: {
    width: '100%',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.color.grey,
    paddingBottom: 10,
    marginTop: 20,
    paddingVertical: 10,
    bottom: 0,
  },
  ResendBottomButton: {
    fontFamily: theme.fonts.tinosBold,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
