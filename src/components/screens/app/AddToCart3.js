import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import {useNavigation} from '@react-navigation/native';

const AddToCart3 = () => {
  const navigation = useNavigation();

  const BackButton = () => {
    navigation.navigate('AddToCart2');
  };
  const UserProfile = () => {
    navigation.navigate('BottomTabs');
  };
  return (
    
    <ScrollView  style={{flex:1}}>
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
              style={styles.BackArrowBtn} onPress={()=>BackButton()}>
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
              style={[styles.OrderStyling,{marginTop: 3}]}>
              <SvgFromXml xml={Xml.OrderDetailsWhite} />
            </View>
            <Text>Order </Text>
          </View>

          <View style={{width: '16%'}}>
            <View
              style={styles.CenterLine}></View>
          </View>

          <View
           style={styles.TopStyling}>
            <View
              style={[styles.OrderStyling,{marginTop: 26}]}>
              <SvgFromXml xml={Xml.TickIconWhite} />
            </View>
            <Text>Order Placed</Text>
          </View>
        </View>

      {/* Header End.................. */}

      <View style={styles.TopContainer}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontFamily: theme.fonts.tinosBold,
          }}>
          Your Order has been placed
        </Text>
        <Image
          source={require('../../../assets/images/amico.png')}
          style={{width: 200, height: 170, marginTop: 6}}
        />
      </View>
      <View style={styles.OrderDetails}>
        <View style={{marginLeft: 25}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: theme.fonts.tinosBold,
            }}>
            Order No. : 024452
          </Text>
          <Text>placed Date: may 10</Text>
          {/* start */}
          <View style={styles.CardContainer}>
            <Image
              source={require('../../../assets/images/cloth.png')}
              style={{
                width: '35%',
                height: 140,
                borderRadius: 7,
                marginLeft: 0,
                marginTop: 10,
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
          <View style={{marginTop: 10}}>
            <Text style={styles.Textbold}>1 Item In Order</Text>
            <View style={styles.TextRow}>
              <Text>Delivery Free</Text>
              <Text>200</Text>
            </View>
            <View style={styles.TextRow}>
              <Text style={styles.Textbold}>Total </Text>
              <Text style={styles.Textbold}>2495</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => UserProfile()}
          style={{
            alignItems: 'center',
            marginTop: 2,
            marginBottom: 30,
            justifyContent: 'center',
            width: '100%',
            height: 160,
          }}>
          <View style={styles.BottonCard}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: theme.fonts.tinosBold,
                color: theme.color.darkbrown,
              }}>
              Shopping Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <SvgFromXml xml={Xml.UserIcon} style={{marginRight: 5}} />
              <Text style={{fontSize: 14, fontFamily: theme.fonts.tinosBold}}>
                Buyer
              </Text>
              <Text style={{marginLeft: 4, fontSize: 12}}>Oliver James</Text>
            </View>
            <Text>0312080028398</Text>
            <Text>bag e jinnah road near patyala house lahore </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    
    
  );
};

export default AddToCart3;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height:1000,
    // backgroundColor: 'blue',
    padding: 10,
  },
  
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

  TopContainer: {
    width: '100%',
    height: 200,
    marginTop: 25,
    alignItems: 'center',
  },
  OrderDetails: {
    width: '100%',
    // backgroundColor: 'red',
    height: 200,
    marginTop: 1,
  },
  cardContant: {
    marginTop: 22,
  },
  CardContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: theme.color.grey,
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
    width: '96%',
    flexDirection: 'row',
  },
  innerContant: {
    width: '65%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  TextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 29,
    marginTop: 12,
  },
  Textbold: {
    fontFamily: theme.fonts.tinosBold,
  },
  BottonCard: {
    width: '80%',
    height: 130,
    borderRadius: 9,
    backgroundColor: theme.color.offwhite,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
