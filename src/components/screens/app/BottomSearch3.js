import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import {useNavigation} from '@react-navigation/native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const BottomSearch3 = () => {
  const navigation = useNavigation();
  const MoveSearchHistory = () => {
    navigation.navigate('SearchHistory');
  };
  const BackBtn = () => {
    navigation.navigate('BottomSearch2');
  };
  const DropUp = () => {
    navigation.navigate('BottomSearch2');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
              borderRadius: 5,
             
            }}>
            <View
              style={{
                width: '88%',
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
                onPress={() => MoveSearchHistory()}>
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

        <View style={styles.categories}>
          {/*............... Start..................... */}
          <View style={{width: '100%'}}>
            <View style={styles.categories2}>
              <View style={styles.insideCategories}>
                <Text
                  style={{
                    marginLeft: 20,
                    fontFamily: theme.fonts.tinosResular,
                    fontSize: 22,
                  }}>
                  Categories
                </Text>
                <TouchableOpacity onPress={() => DropUp()}>
                  <SvgFromXml
                    xml={Xml.DropUp}
                    style={{marginRight: 20, padding: 10}}
                  />
                </TouchableOpacity>
              </View>
              {/* Categories Contant....................... */}

              <View style={styles.insideCategories2}>
                <Text style={{fontFamily: theme.fonts.tinosBold, fontSize: 20}}>
                  Electronic
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginRight: 12,
                    width: '100%',
                  }}>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>WireLess Keyboard</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Cable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Phone</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Watch</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Doll</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Sandals for Girls</Text>
                  </TouchableOpacity>
                </View>

                <Text style={{fontFamily: theme.fonts.tinosBold, fontSize: 20}}>
                  Fasion
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginRight: 12,
                    width: '100%',
                  }}>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Laptop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Mango Juice</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>meat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Juice</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Juice</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BtnsOpacity}>
                    <Text>Juice</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.insideCategories, {marginVertical: 18}]}>
                <Text
                  style={{
                    marginLeft: 20,
                    fontFamily: theme.fonts.tinosResular,
                    fontSize: 22,
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
                    fontSize: 22,
                  }}>
                  Price Range
                </Text>
                <SvgFromXml
                  xml={Xml.DropDownIcon}
                  style={{marginRight: 20, padding: 10}}
                />
              </View>

              {/* .......................Categories Contant */}
            </View>

            {/* End */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BottomSearch3;

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
    borderRadius: 4,
    position: 'absolute',
    right: 0,
  },
  categories: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  categories2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  insideCategories: {
    width: '85%',
    backgroundColor: theme.color.offwhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  insideCategories2: {
    width: '85%',
    backgroundColor: theme.color.offwhite,
    paddingVertical: 14,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    flexWrap: 'wrap',
    paddingHorizontal: 17,
    // flexDirection: 'row'
  },
  BtnsOpacity: {
    borderRadius: 6,
    borderWidth: 0.6,
    padding: 6,
    // width: 90,
    alignItems: 'center',
    backgroundColor: theme.color.offwhite,
    margin: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
