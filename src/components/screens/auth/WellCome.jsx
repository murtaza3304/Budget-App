import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import ReusableButton from './Button';
import theme from '../../../assets/themes/theme';

const WellCome = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  const Signin = () => {
    navigation.navigate('Login');
  };

  const CreateAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width, height, backgroundColor: theme.color.white }} />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/bro.png')}
          style={styles.img}
        />
        <View style={styles.text}>
          <Text style={styles.heading}>Unroll The World With Budget</Text>
          <Text style={styles.paragraph}>
            Let's get started with a login or create your new my Budget account
          </Text>
        </View>

        <ReusableButton
          title="Signin"
          style={styles.Btn3}
          onPress={() => Signin()}
        />
        <ReusableButton
          title="Create an account"
          style={styles.Btn2}
          onPress={() => CreateAccount()}
        />
        <Image
          source={require('../../../assets/images/topImage.png')}
          style={styles.topRightCornerImage}
        />
      </View>
    </View>
  );
};

export default WellCome;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: theme.fonts.tinosBold,
  },
  paragraph: {
    fontSize: 20,
    marginTop: 5,
    color: 'black',
    textAlign: 'center',
    fontFamily: theme.fonts.tinosRegular,
  },
  Btn3: {
    width: '85%',
    paddingHorizontal: 10,
    backgroundColor: theme.color.black,
    color: 'white',
    borderRadius: 10,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  Btn2: {
    width: '85%',
    paddingHorizontal: 10,
    backgroundColor: theme.color.brown,
    borderRadius: 10,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Times New Roman, Times, serif',
    marginTop: 10,
  },
  topRightCornerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '15%',
    resizeMode: 'stretch',
  },
});
