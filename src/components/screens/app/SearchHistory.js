import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import theme from '../../../assets/themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import {useNavigation} from '@react-navigation/native';

const SearchHistory = () => {
  const navigation = useNavigation();

  const ArrowForBack = () => {
    navigation.navigate('MainDashboard');
  };
  const Searching = () => {
    navigation.navigate('Searching');
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.headerSection}>
        <TouchableOpacity
          style={styles.arrrowbtn}
          onPress={() => ArrowForBack()}>
          <SvgFromXml xml={Xml.ArrowForBack} style={{width: 9, height: 9}} />
        </TouchableOpacity>
        <View
          style={{
            paddingLeft: 7,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 34,
          
          
          }}>
          <View
            style={{
              width: '89%',
              backgroundColor: theme.color.offwhite,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8
            }}>
            <TextInput
              placeholder="Ladies"
              style={{fontFamily: theme.fonts.tinosResular, height: 40}}
            />
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: theme.color.white,
                position: 'absolute',
                right: 60,
                paddingHorizontal: 4,
              }}>
              <Text style={{fontFamily: theme.fonts.tinosResular}}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchIcon}
              onPress={() => Searching()}>
              <SvgFromXml xml={Xml.bottomSearchIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 30,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            left: 45,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosBold,
              color: theme.color.black,
              fontSize: 22,
            }}>
            Search History
          </Text>
        </View>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.DeletIcon} style={{padding: 9}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          padding: 20,
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity
       style={styles.TouchableOpacity}>
          <Text>Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
      style={styles.TouchableOpacity}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
       style={styles.TouchableOpacity}>
          <Text>Laptop Charger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}>
          <Text>Electronic Devices</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  arrrowbtn: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.color.offwhite,
    left: 22,
    marginTop: 2,
  },
  searchIcon: {
    backgroundColor: theme.color.darkbrown,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 3,
    position: 'absolute',
    right: 0,
  },
  TouchableOpacity: {
    borderRadius: 8,
    borderWidth: 0.6,
    padding: 6,
    // width: 90,
    alignItems: 'center',
    backgroundColor: theme.color.offwhite,
    margin: 10,
  },
});
