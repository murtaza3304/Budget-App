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
  import {useState, useEffect} from "react";
  import { Keyboard, KeyboardAvoidingView} from 'react-native';
  
  const ResetPassword = () => {


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




      const navigation = useNavigation();
      const Login = () => {
        navigation.navigate('Login');
      }
      const GetCode=()=>{
        navigation.navigate('ResetVerificationCode');
      }
    

    const imageSource = require('../../../../assets/images/logo.png');
    return (
      <>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <SignUpSignInBg imageSource={imageSource} />
        </View>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex:1}}  style={{width: '100%', }}>

          {/* <View style={styles.bgView}></View> */}
          
            <View style={styles.content}>
          
            
              <View style={styles.BackIcon}>
                <TouchableOpacity style={styles.bgSvgIcon} onPress={()=>Login()}>
                  <SvgXml xml={Xml.ArrowForBack} style={styles.ArrowForBack} />
                </TouchableOpacity>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.Heading}>Reset Password</Text>
                <Text style={styles.paragraph}>
                 Enter Your Email address to get verification code
                </Text>
              </View>
              <View style={styles.Verify}>
                <Text style={styles.passwordHeading}>Email</Text>
                <TextInput
                  placeholder="Enter Your Email"
                  style={styles.inputforcode}></TextInput>
              
              </View>
              <View style={styles.BtnStyling}>
                <ReusableButton
                  title="Get Code"
                  style={styles.Btn}
                  onPress={() => GetCode()}
                />
              </View> 
            </View>
            {isKeyboardVisible ? null : 
            <View style={styles.footer}>
                <Text style={{color: theme.color.black, fontFamily: theme.fonts.tinosResular}}>
                  Remember Your Password
                </Text>
                <TouchableOpacity style={styles.ResendBottomButton} onPress={()=>Login()}>
                  <Text style={{color: theme.color.brown}}>Login</Text>
                </TouchableOpacity>
              </View>
            }
            </ScrollView>
          
        </View>
      </>
    );
  };
  
  export default ResetPassword;
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex:1,
      // backgroundColor:"red",
      paddingTop:120,
      justifyContent:"flex-end"
    },
    bgView: {
      width: '100%',
      height:350,
    },
    content: {
      flex:1,
      width: '100%',
      // height: Dimensions.get('window').height * 0.6,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginTop: 20,
      // backgroundColor:"yellow",
      justifyContent:"center"
    },
    bgSvgIcon: {
      backgroundColor: theme.color.lightblue,
      width: 40,
      height: 40,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
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
      color: theme.color.black,
      fontSize: 22,
    },
    paragraph: {
      fontFamily: theme.fonts.tinosResular,
      fontSize: 14,
      marginTop: 5
    },
    Verify: {  
      width: '100%',
      marginTop: 20,
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
      paddingTop: 5,
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
      marginTop: 30,
    },
    BtnStyling: {
      width: '100%',
    },
    footer: {
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: theme.color.bgcolor,
      paddingBottom: 10,
      marginTop: 30,
      paddingVertical: 10,
      paddingHorizontal: 40,
      position: 'absolute',
      bottom: 0
    },
    ResendBottomButton: {
      fontFamily: theme.fonts.tinosBold,
      alignSelf: 'center',
      justifyContent: 'center',
      marginLeft: 12,
    },
  });
  