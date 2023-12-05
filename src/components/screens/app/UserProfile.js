import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import theme from '../../../assets/themes/theme';
import Xml from '../../../assets/icons/Xml';
import {SvgFromXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  const Setting = () => {
    navigation.navigate('Setting');
  };
  const Pending = () => {
    navigation.navigate('Pending');
  };
  const processing = () => {
    navigation.navigate('Processing');
  };
  const Shipped = () => {
    navigation.navigate('Shipped');
  };
  const Review = () => {
    navigation.navigate('Review');
  };
  return (
    <>
      <ScrollView>
        <View style={styles.ContainerTop}>
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => Setting()}>
              <SvgFromXml xml={Xml.SettingIcon} style={styles.settingIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.Profile}>
            <Image
              source={require('../../../assets/images/MainBgImage.png')}
              style={styles.images}
            />
            <View style={styles.AhmadHammad}>
              <Text style={{color: 'white', fontSize: 20}}>Ahmad Hammad</Text>
              <TouchableOpacity style={styles.userBtn}>
                <SvgFromXml xml={Xml.VipCenter} />
                <Text
                  style={{
                    color: theme.color.darkbrown,
                    fontSize: 14,
                    fontFamily: theme.fonts.tinosResular,
                  }}>
                  Vip Center
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.RatingUser}>
            <View style={styles.text}>
              <Text style={[styles.title, {fontSize: 20}]}>5</Text>
              <Text style={styles.title}>Wishes</Text>
            </View>
            <SvgFromXml xml={Xml.VerticalLine} />
            <View style={styles.text}>
              <Text style={[styles.title, {fontSize: 20}]}>10</Text>
              <Text style={styles.title}>Coupons</Text>
            </View>
            <SvgFromXml xml={Xml.VerticalLine} />
            <View style={styles.text}>
              <Text style={[styles.title, {fontSize: 20}]}>55</Text>
              <Text style={styles.title}>points</Text>
            </View>
          </View>
        </View>
        <View style={styles.BottomComtainer}>
          <View style={{paddingHorizontal: 2}}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: theme.fonts.tinosBold,
                marginLeft: 20,
                color: 'black',
              }}>
              My Order
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <View style={styles.MyOrders}>
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={() => Pending()}>
                  <SvgFromXml xml={Xml.Pending} style={styles.Icons} />
                </TouchableOpacity>
                <Text>Pending</Text>
              </View>
              <View style={styles.MyOrders}>
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={() => processing()}>
                  <SvgFromXml xml={Xml.processing} style={styles.Icons} />
                </TouchableOpacity>
                <Text>processing</Text>
              </View>
              <View style={styles.MyOrders}>
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={() => Shipped()}>
                  <SvgFromXml xml={Xml.Shipped} style={styles.Icons} />
                </TouchableOpacity>
                <Text>Shipped</Text>
              </View>
              <View style={styles.MyOrders}>
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={() => Review()}>
                  <SvgFromXml xml={Xml.Review} style={styles.Icons} />
                </TouchableOpacity>
                <Text>Review</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: theme.color.lightblack,
            marginTop: 30,
          }}></View>

        <View style={styles.MainBottom}>
          <View style={{width: '96%', marginBottom: 70}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                marginBottom: 8,
              }}>
              Check Out Wallet
            </Text>

            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 6,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[styles.title, {color: theme.color.lightblack}]}>
                  PKR
                </Text>
                <Text style={[styles.title, {color: theme.color.darkbrown}]}>
                  0
                </Text>
              </View>
              <SvgFromXml xml={Xml.VerticalLineBlack} />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[styles.title, {color: theme.color.lightblack}]}>
                  Vouchers
                </Text>
                <Text style={[styles.title, {color: theme.color.darkbrown}]}>
                  0
                </Text>
              </View>
            </View>
            <View style={styles.forText}>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  color: 'black',
                  marginTop: 17,
                  marginBottom: 12,
                  marginLeft: 15,
                }}>
                My Services
              </Text>
              <View style={styles.Myservices}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.MessageIcon} />
                  <Text style={[styles.title, styles.InnerIcons]}>
                    My Message
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.Location} />
                  <Text style={[styles.title, styles.InnerIcons]}>
                    My Message
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.UserFace} />
                  <Text style={[styles.title, styles.InnerIcons]}>
                    My Message
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.PaymantOption} />
                  <Text style={[styles.title, styles.InnerIcons]}>
                    My Message
                  </Text>
                </View>
              </View>
            </View>
            {/* Card */}
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: 'black',
                  fontFamily: theme.fonts.tinosBold,
                }}>
                Hot Sale
              </Text>
            </View>

            <View style={styles.outerContainer}>
              <View style={styles.container}>
                <Image
                  source={require('../../../assets/images/image3.jpg')}
                  style={styles.image}
                />
                <Text style={styles.title}>New Watch</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgFromXml xml={Xml.RatingStar} />
                  <Text style={styles.TextStyle}>Rating 4.5/5.203 Sold</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 4}}>
                  <Text style={{color: theme.color.darkbrown, fontSize: 14}}>
                    Rs 1499
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      fontSize: 10,
                      marginTop: 4,
                    }}>
                    Rs 1499
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <Image
                  source={require('../../../assets/images/image3.jpg')}
                  style={styles.image}
                />
                <Text style={styles.title}>New Watch</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgFromXml xml={Xml.RatingStar} />
                  <Text style={styles.TextStyle}>Rating 4.5/5.203 Sold</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 4}}>
                  <Text style={{color: theme.color.darkbrown, fontSize: 14}}>
                    Rs 1499
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      fontSize: 10,
                      marginTop: 4,
                    }}>
                    Rs 1499
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  ContainerTop: {
    backgroundColor: theme.color.darkbrown,
    height: 250,
    width: '100%',
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  settingIcon: {
    top: 35,
    right: 25,
  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    top: 40,
    paddingHorizontal: 50,
  },
  images: {
    width: 100,
    height: 100,
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'purple',
    marginRight: 9,
  },
  userBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 6,
    width: 100,
    marginTop: 9,
    borderRadius: 6,
  },
  RatingUser: {
    width: '100%',
    height: 70,

    marginTop: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: theme.fonts.tinosBold,
    fontSize: 17,
  },
  BottomComtainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
    height: 120,
  },
  TouchableOpacity: {
    marginTop: 12,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: theme.color.lightWhite,
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginBottom: 4,
  },

  MyOrders: {
    alignItems: 'center',
    width: 100,
    borderRadius: 0,
    marginTop: 1,
  },
  MainBottom: {
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 12,
  },
  Myservices: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 3,
    height: 65,
  },
  InnerIcons: {color: theme.color.lightblack, fontSize: 10, marginTop: 8},
  forText: {
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
    marginTop: 12,
  },
  container: {
    marginRight: 20,
    padding: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    height: 250,
  },
  image: {
    width: 150,
    height: 175,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    marginLeft: 3,
  },
  outerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 12,
  },
});
