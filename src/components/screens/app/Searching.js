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

const Searching = () => {
  const navigation = useNavigation()
  const SearchingBack =()=> {
    navigation.navigate('BottomSearch3')
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.arrrowbtn} onPress={()=>SearchingBack()}>
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
                width: '89%',
                backgroundColor: theme.color.offwhite,
                flexDirection: 'row',
                borderRadius: 8,
                alignItems: 'center',
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
          marginTop: 40,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            left: 45,
            borderBottomColor: theme.color.brown,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              fontsize: 14,
            }}>
            Ladies Watch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.color.white,
          borderWidth: 0.5,
          marginTop: 2,
        }}></View>
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
            // borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              //   color: theme.color.darkbrown,
              fontsize: 14,
            }}>
            Ladies Bracelet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.color.white,
          borderWidth: 0.5,
          marginTop: 2,
        }}></View>
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
            borderBottomColor: theme.color.grey,
            // borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              //   color: theme.color.darkbrown,
              fontsize: 14,
            }}>
            Ladies Handbag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.color.grey,
          borderWidth: 0.5,
          marginTop: 2,
        }}></View>
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
            // borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              //   color: theme.color.darkbrown,
              fontsize: 14,
            }}>
            Ladies Shoes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.color.white,
          borderWidth: 0.5,
          marginTop: 2,
        }}></View>
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
            // borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: theme.fonts.tinosResular,
              //   color: theme.color.darkbrown,
              fontsize: 14,
            }}>
            Ladies Bag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{right: 45}}>
          <SvgFromXml xml={Xml.filterRightArrow} style={{padding: 12}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.color.white,
          borderWidth: 0.5,
          marginTop: 2,
        }}></View>
    </View>
  );
};

export default Searching;

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
});
