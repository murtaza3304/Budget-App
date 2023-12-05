import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import PendingComponent from './PendingComponent';
import {useNavigation} from '@react-navigation/native';
import UserProfile from './UserProfile';

const Pending = () => {
  const navigation = useNavigation();

  const UserProfile = () => {
    navigation.goBack();
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
        <Text style={styles.Heading}>Pending</Text>
      </View>
      <View style={styles.Component}>
        <View style={styles.inSideComponent}>
          <PendingComponent image={image} text1={text1} text2={text2} />
          <Text style={styles.Pending}>Pending</Text>
        </View>
      </View>
      <View style={styles.Component}>
        <View style={styles.inSideComponent}>
          <PendingComponent image={image} text1={text1} text2={text2} />
          <Text style={styles.Pending}>Pending</Text>
        </View>
      </View>
      <View style={styles.Component}>
        <View style={styles.inSideComponent}>
          <PendingComponent image={image} text1={text1} text2={text2} />
          <Text style={styles.Pending}>Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default Pending;

const styles = StyleSheet.create({
  FirstBackBtn: {
    flexDirection: 'row',
    paddingTop: 35,
    marginLeft: 30,
    marginBottom: 55
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
    marginTop: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inSideComponent: {
    width: '93%',
    paddingHorizontal: 28,
    backgroundColor: theme.color.grey,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 10,
  },
  Pending: {
    color: theme.color.darkbrown,
    fontFamily: theme.fonts.tinosBold,
    paddingRight: 1,
    marginRight: 2,
  },
});
