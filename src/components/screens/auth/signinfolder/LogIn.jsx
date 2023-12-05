import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import SignUpSignInBg from '../SignUpSignInBg';
import theme from '../../../../assets/themes/theme';
import {SvgXml} from 'react-native-svg';
import Xml from '../../../../assets/icons/Xml';
import ReusableButton from '../Button';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, Keyboard} from 'react-native';
import {useState, useEffect} from 'react';
import '../../../../Global';

const Login = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [secureText, setsecureText] = useState(true)

  const showText = () => {
    setsecureText((secureText)=> !secureText)
  }



  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  console.log('globals====>', global.isLogged);
  const navigation = useNavigation();
  const SignUp = () => {
    navigation.navigate('SignUp');
  };
  const ForgetPassword = () => {
    navigation.navigate('ResetPassword');
  };
  const LoginButton = () => {
    navigation.navigate('App');
  };
  const Google = async () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: 'AIzaSyDMDxFpiYJ9dmkqFPsXztrTf1xWSY641-A', // Replace with your web client ID from the Google Cloud Console
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    const userInfo = await GoogleSignin.signIn();
    console.log('user info', userInfo);
  };
  const Apple = () => {
    navigation.navigate('Apple');
  };

  const imageSource = require('../../../../assets/images/logo.png');

  return (
    <>
      <View style={{flex: 1}}>
        <SignUpSignInBg imageSource={imageSource} />
      </View>
      <View style={styles.container}>
        {/* bgtransparent */}
        <View style={styles.bgView} />
        <ScrollView>
          <View style={styles.content}>
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.Heading}>Login</Text>
                <Text style={styles.paragraph}>
                  Enter your email address & password below
                </Text>
              </View>
              {/* Email */}
              <KeyboardAvoidingView style={styles.EmailContainer}>
                <Text style={styles.Email}>Email</Text>
                <TextInput
                  style={styles.EmailInput}
                  placeholder="Enter Email address"
                />
              </KeyboardAvoidingView>
              {/* Password */}
              <KeyboardAvoidingView style={styles.Verify}>
                <Text style={styles.passwordHeading}>Password</Text>
                <View style={styles.inputSpace}>
                  <TextInput
                  secureTextEntry={secureText}
                    placeholder="Enter Password"
                    style={styles.inputforcode}
                  />
                  <TouchableOpacity style={styles.ResendBottomButton} onPress={showText}>
                    <SvgXml xml={Xml.PassHideIcon} style={styles.inputSvgXml} />
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
              <View style={styles.ResetPassword}>
                <TouchableOpacity onPress={() => ForgetPassword()}>
                  <Text style={styles.passwordHeading}>Forget Password?</Text>
                </TouchableOpacity>
                <ReusableButton
                  title="login"
                  style={styles.Btn}
                  onPress={() => LoginButton()}
                />
                <View style={styles.mainRowContainer}>
                  <View style={styles.forRowView}>
                    <SvgXml xml={Xml.centerLine} style={styles.centerLine1} />
                    <Text style={styles.centerText}>Or Login With</Text>
                    <SvgXml xml={Xml.centerLine2} style={styles.centerLine1} />
                    <TouchableOpacity
                      style={styles.rowBtnContainer}
                      onPress={() => Google()}>
                      <SvgXml xml={Xml.googleIcon} style={styles.googleIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rowBtnContainer2}
                      onPress={() => Apple()}>
                      <SvgXml xml={Xml.appleIon} style={styles.appleIon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {isKeyboardVisible ? null : (
          <View style={styles.footer}>
            <Text style={{color: theme.color.black}}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              style={styles.loginBottomButton}
              onPress={() => SignUp()}>
              <Text style={{color: theme.color.brown}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default Login;

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
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
    marginTop: 5,
  },
  Heading: {
    fontFamily: theme.fonts.tinosBold,
    color: theme.color.black,
    fontSize: 26,
  },
  paragraph: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
  },
  EmailContainer: {
    marginTop: 5,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'start',
    paddingLeft: 0,
    marginTop: 15,
  },
  Email: {
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
  },
  EmailInput: {
    width: '100%',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
  },
  Verify: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%',
    marginTop: 10,
  },
  passwordHeading: {
    fontFamily: theme.fonts.tinosBold,
    fontSize: 13,
    color: theme.color.black,
  },
  inputforcode: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
    paddingTop: 0,
    paddingBottom: 3,
    width: '100%',
  },
  inputSpace: {
    flexDirection: 'row',
    width: '100%',
  },
  inputSvgXml: {
    flex: 'end',
    width: 20,
    height: 20,
    marginBottom: 0,
  },
  ResetPassword: {
    marginTop: 5,
    alignItems: 'flex-end',
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
    marginTop: 15,
  },
  forRowView: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    marginTop: 20,
    paddingVertical: 10,
  },
  centerLine1: {
    width: '90%',
    height: 6,
    backgroundColor: theme.color.lightblack,
    marginRight: 0,
  },
  rowBtnContainer: {
    backgroundColor: theme.color.lightblack,
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: 45,
    position: 'absolute',
  },
  rowBtnContainer2: {
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.lightblack,
    position: 'absolute',
    right: 0,
  },
  mainRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
  centerText: {
    marginHorizontal: 9,
  },
  //   Footer style
  footer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.color.bgcolor,
    paddingBottom: 10,
    marginTop: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
  loginBottomButton: {
    fontFamily: theme.fonts.tinosBold,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  ResendBottomButton: {
    marginRight: 1,
    position: 'absolute',
    right: 3,
  },
});
