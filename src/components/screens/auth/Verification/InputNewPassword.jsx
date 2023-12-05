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


const InputNewPassword = () => {

  const navigation = useNavigation()

  const CreateNewPassword=()=>{
    navigation.navigate('SignUpSuccess')
  }
  const BackButton=()=>{
    navigation.navigate('ResetVerificationVode')
  }

  const imageSource = require('../../../../assets/images/logo.png');
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <SignUpSignInBg imageSource={imageSource} />
      </View>
      <View style={styles.container}>
        <View style={styles.bgView}></View>
        <ScrollView>
        <View style={styles.content}>
          <View style={styles.BackIcon}>
            <TouchableOpacity style={styles.bgSvgIcon} onPress={()=>BackButton()}>
              <SvgXml xml={Xml.ArrowForBack} style={styles.ArrowForBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.Heading}>Create Password</Text>
            <Text style={styles.paragraph}>
              Create password to secure Your accound
            </Text>
          </View>
          <View style={styles.Verify}>
            <Text style={styles.passwordHeading}>Password</Text>
            <View style={styles.inputSpace}>
              <TextInput
                placeholder="Password"
                style={styles.inputforcode}></TextInput>
              <TouchableOpacity style={styles.ResendBottomButton}>
                <SvgXml xml={Xml.PassHideIcon} style={styles.inputSvgXml} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Verify}>
            <Text style={styles.passwordHeading}>Confirm Password</Text>
            <View style={styles.inputSpace}>
              <TextInput
                placeholder="Confirm Password"
                style={styles.inputforcode}></TextInput>
              <TouchableOpacity style={styles.ResendBottomButton}>
                <SvgXml xml={Xml.PassHideIcon} style={styles.inputSvgXml} />
              </TouchableOpacity>
            </View>
            <ReusableButton
              title="Create Password"
              style={styles.Btn}
              onPress={() => CreateNewPassword()}
            />
          </View>
        </View>
        </ScrollView>
      </View>
    </>
  );
};

export default InputNewPassword;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundColor:'green'
  },
  bgView: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
  },
  content: {
    width: '100%',
    height: Dimensions.get('window').height * 0.6,
    // backgroundColor: 'lightblue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  bgSvgIcon: {
    backgroundColor: theme.color.bgcolor,
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
    fontSize: 20,
    color: theme.color.black,
    fontSize: 22,
  },
  paragraph: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
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
    marginTop: 10,
  },
  inputforcode: {
    fontFamily: theme.fonts.tinosResular,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.lightblack,
    paddingTop: 0,
    paddingBottom: 3,
    width: '93%',
  },
  inputSpace: {
    flexDirection: 'row',
    width: '100%',
  },
  inputSvgXml: {
    flex: 'end',
    width: 20,
    height: 20,
    marginBottom: 13,
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
  ResendBottomButton: {
    position:'absolute',
    right: 17
  }
});
