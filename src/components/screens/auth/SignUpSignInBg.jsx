import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../../../assets/themes/theme';

const SignUpSignInBg = ({ imageSource, centerImage }) => {
  return (
    <View style={styles.container} >
      <Image
        source={require('../../../assets/images/lefttopimage.png')}
        style={[styles.image, { top: 0, right: 0, position: 'absolute' }]}
      />
      <View style={styles.centerimage}>
        <Image
          source={imageSource}
          style={{...styles.logo, ...centerImage}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
export default SignUpSignInBg;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.white
  },
  image: {
    width: '50%',
    height: "50%",
    
  },
  logo: {
    width: '30%',
    height: "30%",
    // position: 'absolute',
    marginBottom: 20,
    // paddingHorizontal:12
  },
  centerimage: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
