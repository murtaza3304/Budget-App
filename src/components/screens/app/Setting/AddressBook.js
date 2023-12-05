import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Xml from '../../../../assets/icons/Xml';
import {SvgFromXml} from 'react-native-svg';
import theme from '../../../../assets/themes/theme';
import {useNavigation} from '@react-navigation/native';
import UserProfile from '../UserProfile';

const AddressBook = () => {
  const navigation = useNavigation();

  const editInformation = () => {
    navigation.navigate('AddToCart2');
  };
  const BackSetting = () => {
    navigation.navigate('Setting');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopHeader}>
          <TouchableOpacity
            style={styles.ArrowForBack}
            onPress={() => BackSetting()}>
            <SvgFromXml xml={Xml.ArrowForBack} />
          </TouchableOpacity>
          <Text style={styles.HeadingTop}>Address Book</Text>
        </View>
        <View style={styles.Contant}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.AhmadText}>Ahmad Hassan</Text>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>editInformation()}>
              <Text style={styles.exitBtn}>edit</Text>
            </TouchableOpacity>
          </View>
          <Text>0313474783</Text>
            <Text>abc@gmail.com</Text>
            <Text>jinnah Colony, Faisalabad , Pakistan</Text>
        </View>
      </View>
    </>
  );
};

export default AddressBook;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  TopHeader: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-between',
  },
  ArrowForBack: {
    padding: 8,
    backgroundColor: theme.color.grey,
    borderRadius: 5,
  },
  HeadingTop: {
    fontSize: 18,
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
  },
  Contant: {
    backgroundColor:"white",
    marginTop: 50,
    borderRadius: 10,
    width: '100%',
    height: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    borderColor: theme.color.grey,
    borderWidth: 1,
    padding: 20,
  },
  AhmadText: {
    fontSize: 18,
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
    marginBottom: 12
  },
  TouchableOpacity: {
    padding: 4,
  },
  exitBtn: {
    color: theme.color.darkbrown,
    fontSize: 16,
    fontFamily: theme.fonts.tinosBold,
  },
});
