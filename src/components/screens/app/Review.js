import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import PendingComponent from './PendingComponent';
import {useNavigation} from '@react-navigation/native';
import UserProfile from './UserProfile';

const Review = () => {
  const navigation = useNavigation();

  const UserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const image = require('../../../assets/images/image1.jpg');
  const text1 = ' in another file and pass the necessary props';
  const text2 = ' this component in another file and pass the necessary props:';
  return (
    <View>
      <View style={styles.FirstBackBtn}>
        <TouchableOpacity style={styles.ArrowForBack} onPress={UserProfile}>
          <SvgFromXml xml={Xml.ArrowForBack} />
        </TouchableOpacity>
        <Text style={styles.Heading}>Write Review</Text>
      </View>
      <View style={styles.Component}>
        <View style={styles.inSideComponent}>
          <PendingComponent image={image} text1={text1} text2={text2} />
        </View>
      </View>
      <View style={styles.Line}></View>
      <View style={styles.RatingComtainer}>
        <View style={styles.Stars}>
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
        </View>
        <View style={[styles.TextInput, {height: 140}]}>
          <TextInput
            placeholder="Don't Shy tell Me More"
            style={{marginLeft: 8}}
          />
        </View>
      </View>
      <View style={styles.RateRouter}>
        <SvgFromXml xml={Xml.ShippedBlack}  style={{marginLeft: 20, marginRight: 6}}/>
        <Text style={{fontFamily: theme.fonts.tinosBold}}>Rate your Rider</Text>
      </View>
      {/* More */}
      <View style={styles.RatingComtainer}>
        <View style={styles.Stars}>
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
          <SvgFromXml xml={Xml.Star} />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="how was your overall experience with our rider"
            style={{marginLeft: 8}}
          />
        </View>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  FirstBackBtn: {
    flexDirection: 'row',
    paddingTop: 35,
    marginLeft: 30,
    marginBottom: 20,
  },
  Heading: {
    marginLeft: 30,
    fontSize: 22,
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
  },
  ArrowForBack: {
    padding: 10,
    backgroundColor: theme.color.offwhite,
    borderRadius: 7,
  },
  Component: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  inSideComponent: {
    width: '93%',
    borderRadius: 8,
  },
  Line: {
    width: '100%',
    height: 1,
    backgroundColor: theme.color.grey,
    marginVertical: 20,
  },
  RatingComtainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Stars: {
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 20,
    flexDirection: 'row',
  },
  TextInput: {
    marginTop: 20,
    height: 100,
    width: '85%',
    borderColor: theme.color.grey,
    borderWidth: 1,
    borderRadius: 6,
  },
  RateRouter: {
    flexDirection: 'row',
    marginTop: 25,
    width: '100%',
    height: 25,
    backgroundColor: theme.color.grey,
    alignItems: 'center',
    marginBottom: 20 
  },
});
