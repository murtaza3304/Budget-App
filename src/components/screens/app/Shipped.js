import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import PendingComponent from './PendingComponent';
import {useNavigation} from '@react-navigation/native';
import UserProfile from './UserProfile';

const Shipped = () => {
  const navigation = useNavigation();

  const UserProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <View>
      <View style={styles.FirstBackBtn}>
        <TouchableOpacity style={styles.ArrowForBack} onPress={UserProfile}>
          <SvgFromXml xml={Xml.ArrowForBack} />
        </TouchableOpacity>
        <Text style={styles.Heading}>Order Detail</Text>
      </View>
      <View style={styles.AllText}>
        <Text style={styles.Ship}>Ship & bill to </Text>
        <Text style={styles.AhmadHassan}>Ahmad Hassan</Text>
        <Text style={styles.fontIssue}>03123948221</Text>
        <Text style={styles.fontIssue}>----@gmail.com</Text>
        <Text style={styles.fontIssue}>
          jinnah colony , faisalabad Punjab, Pakistan
        </Text>
        <Text style={styles.Order}>Order No. 098344</Text>
        <Text>Placed Date: 10 May</Text>
      </View>
      <View style={styles.CardContainer}>
        <Image
          source={require('../../../assets/images/cloth.png')}
          style={{
            width: '35%',
            height: 142,
            borderRadius: 7,
            marginLeft: 0,
            marginTop: 6,
          }}
        />
        <View style={styles.innerContant}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 15}}>QTY: 1</Text>
            <TouchableOpacity>
              <SvgFromXml xml={Xml.DeletIcon} />
            </TouchableOpacity>
          </View>
          <Text>Zarin</Text>
          <Text>whole sale Price: 2068</Text>
          <Text>Final: 2068</Text>
        </View>
      </View>
      <View style={styles.textCard}>
        <Text style={styles.Order}>1 Item In Order</Text>
        <View style={styles.TextRow}>
          <Text>Delivery Free</Text>
          <Text>200</Text>
        </View>
        <View style={styles.TextRow}>
          <Text style={styles.Order}>Total </Text>
          <Text style={styles.Order}>2495</Text>
        </View>
      </View>
    </View>
  );
};

export default Shipped;

const styles = StyleSheet.create({
  FirstBackBtn: {
    flexDirection: 'row',
    paddingTop: 35,
    marginLeft: 25,
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
    marginRight:12
  },
  AllText: {
    paddingHorizontal: 25,
  },
  AhmadHassan: {
    fontSize: 16,
    fontFamily: theme.fonts.tinosBold,
    marginVertical: 8,
    color: 'black',
  },
  Order: {
    fontSize: 16,
    fontFamily: theme.fonts.tinosBold,
    marginTop: 20,
    color: 'black',
  },
  fontIssue: {
    fontSize: 11,
    fontFamily: theme.fonts.tinosResular,
  },
  Ship: {
    fontSize: 15,
    fontFamily: theme.fonts.tinosResular,
  },
  CardContainer: {
    marginTop: 5,
    marginLeft: 30,
    borderRadius: 7,
    borderColor: theme.color.grey,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '88%',
    flexDirection: 'row',
  },
  innerContant: {
    width: '65%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  TextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 29,
    marginTop: 12,
  },
  textCard: {
    marginLeft: 25,
    marginTop: 15,
  },
});
