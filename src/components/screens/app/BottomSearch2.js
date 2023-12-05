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
import {useNavigation} from '@react-navigation/native';

const BottomSearch2 = () => {
  const navigation = useNavigation();

  const OpenDropDown = () => {
    navigation.navigate('BottomSearch3');
  };
  const ClickSearch = () => {
    navigation.navigate('SearchHistory');
  };
  const BackBtn = () => {
    navigation.navigate('MainDashboard')
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.arrrowbtn} onPress={()=>BackBtn()}>
          <SvgFromXml xml={Xml.ArrowForBack} style={{width: 9, height: 9}}/>
        </TouchableOpacity>
        <View
            style={{
              paddingLeft: 7,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 34,
              borderRadius: 8,
            }}>
            <View
              style={{
                width: '88%',
                backgroundColor: theme.color.offwhite,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius:8
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
                onPress={() => ClickSearch()}>
                <SvgFromXml xml={Xml.bottomSearchIcon} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 40,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            left: 45,
            borderBottomColor: theme.color.brown,
            borderBottomWidth: 1,
          }}>
          <SvgFromXml
            xml={Xml.filterSvg}
            style={{padding: 8, marginRight: 3, marginTop: 4}}
          />
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              color: theme.color.darkbrown,
              fontSize: 18,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View style={styles.contantSection}>
        <View style={styles.categories}>
          <View style={styles.insideCategories}>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: theme.fonts.tinosResular,
                fontSize: 18,
              }}>
              categories
            </Text>
            <TouchableOpacity onPress={() => OpenDropDown()}>
              <SvgFromXml
                xml={Xml.DropDownIcon}
                style={{marginRight: 20, padding: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.insideCategories, {marginVertical: 18}]}>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: theme.fonts.tinosResular,
                fontSize: 18,
              }}>
             Brands
            </Text>
            <SvgFromXml
              xml={Xml.DropDownIcon}
              style={{marginRight: 20, padding: 10}}
            />
          </View>
          <View style={styles.insideCategories}>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: theme.fonts.tinosResular,
                fontSize: 18,
              }}>
              Price Range
            </Text>
            <SvgFromXml
              xml={Xml.DropDownIcon}
              style={{marginRight: 20, padding: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomSearch2;

const styles = StyleSheet.create({
  headerSection: {
    // backgroundColor: 'red',
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
  contantSection: {
    marginTop: 50,
  },
  categories: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideCategories: {
    width: '85%',
    backgroundColor: theme.color.offwhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderRadius: 8,
  },
});
