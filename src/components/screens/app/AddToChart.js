import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import {useNavigation} from '@react-navigation/native';
import ReusableButton from '../auth/Button';

const AddToChart = () => {

  const navigation = useNavigation();

  const BackToCart = () => {
    navigation.navigate('BottomTabs');
  };
  const NextCart = () => {
    navigation.navigate('AddToCart2');
  };

  return (
    <View style={styles.Container}>
         <View
          style={{
            width: ' 100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            flexDirection: 'row',
           paddingHorizontal:20
          }}>
          <View style={{width: '16%'}}>
            <TouchableOpacity
              style={styles.BackArrowBtn} onPress={()=>BackToCart()}>
              <SvgFromXml xml={Xml.ArrowForBack} />
            </TouchableOpacity>
          </View>

          <View style={styles.TopStyling}>
            <View
              style={[styles.OrderStyling,{marginTop: 3}]}>
              <SvgFromXml xml={Xml.Chart} />
            </View>
            <Text>Cart</Text>
          </View>

          <View style={{width: '16%'}}>
            <View style={styles.CenterLine}></View>
          </View>

          <View
            style={styles.TopStyling}>
            <View
              style={[styles.OrderStyling,{marginTop: 26, backgroundColor: 'white'}]}>
              <SvgFromXml xml={Xml.OrderDetails} />
            </View>
            <Text>Order Details</Text>
          </View>

          <View style={{width: '16%'}}>
            <View
              style={styles.CenterLine}></View>
          </View>

          <View
           style={styles.TopStyling}>
            <View
              style={[styles.OrderStyling,{marginTop: 26, backgroundColor: 'white'}]}>
              <SvgFromXml xml={Xml.BrownTick} />
            </View>
            <Text>Order Placed</Text>
          </View>
        </View>

      {/* start */}
      <View style={styles.CardContainer}>
        <View style={styles.image}>
          {/* Route */}
          <Image source={require('../../../assets/images/image1.jpg')} resizeMode="cover"/>
        </View>
        <View style={styles.cardContant}>
          <View style={{flexDirection: 'row'}}>
            <Text>QTY-1</Text>
            <TouchableOpacity>
              <SvgFromXml xml={Xml.DeletIcon} style={{marginLeft: 20}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Zarin</Text>
            <Text>Whole Sale Price: 2578</Text>
            <Text>Final Price: 2578</Text>
          </View>
        </View>
      </View>
      {/* End */}
      <Text
        style={{
          marginTop: 25,
          marginLeft: 15,
          fontSize: 16,
          fontFamily: theme.fonts.tinosBold,
        }}>
        1 Item In Chart
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: 12,
        }}>
        <Text>Delivery Fee</Text>
        <Text>Rs: 200</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.color.grey,
          marginTop: 30,
        }}></View>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 12,
        }}>
        <Text
          style={{
          
            fontFamily: theme.fonts.tinosBold,
            fontSize: 18,
          }}>
          Total
        </Text>
        <Text
          style={{
            fontFamily: theme.fonts.tinosBold,
            fontSize: 18,
          }}>
          2345
        </Text>
      </View>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <ReusableButton
          title="Next"
          style={styles.btn1}
          onPress={() => NextCart()}
        />
      </View>
    </View>
  );
};

export default AddToChart;

const styles = StyleSheet.create({
  BackArrowBtn: {
    backgroundColor: 'white',
    width: 35, 
    height:35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  TopStyling: 
  {width: '16%', 
  alignItems: 'center',
   justifyContent: 'center'
  },
  OrderStyling: {
    width: 50,
    height: 50,
    backgroundColor: theme.color.darkbrown,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    borderRadius: 50,
  },
  CenterLine: {
      width: 33.71,
      height: 1,
      backgroundColor: theme.color.darkbrown,
      marginLeft: 12,
  },

  ArrowBack: {
    position: 'absolute',
    left: 17,
    top: 45,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.offwhite,
    borderRadius: 10,
  },
  Container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  InnerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
    padding: 16,
  },
  innersetting: {
    backgroundColor: theme.color.darkbrown,
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: theme.color.darkbrown,
  },
  Pages: {

    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  image: {
    width: 135,
    height: 125,
    borderRadius: 7,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: theme.color.grey,
   
  },
  cardContant: {
    marginLeft: 20,
  },
  CardContainer: {
    width: '99%',
    marginTop: 22,
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    justifyContent: 'flex-start',
    borderRadiusColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: 'red',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    borderRadius: 9,
  },
  btn1: {
    backgroundColor: theme.color.darkbrown,
    marginRight: 8,
    marginTop: 50,
    width: '40%',
  },
});
