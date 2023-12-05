import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import theme from '../../../assets/themes/theme';
import {useNavigation} from '@react-navigation/native';
import ReusableButton from '../auth/Button';

const AddToCart2 = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [isVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(Xml.Jazzcash);
  const [selectedMethod, setSelectedMethod] = useState({
    jcash: true,
    cash: false,
  });

  const [isPopupVisible, setPopupVisible] = useState(false);

  const navigation = useNavigation();

  const BackToCart = () => {
    navigation.navigate('BottomTabs');
  };
  const Submit = () => {
    navigation.navigate('AddToCart3');
  };

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };
  

  return (
    <ScrollView style={styles.scrollView}>
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
            <TouchableOpacity
              style={[styles.OrderStyling,{marginTop: 3}]}>
              <SvgFromXml xml={Xml.Chart} />
            </TouchableOpacity>
            <Text>Cart</Text>
          </View>
          <View style={{width: '16%'}}>
            <View style={styles.CenterLine}></View>
          </View>

          <View
            style={styles.TopStyling}>
            <TouchableOpacity
              style={[styles.OrderStyling,{marginTop: 26}]}>
              <SvgFromXml xml={Xml.ChartDetailsWhite} />
            </TouchableOpacity>
            <Text>Order Details</Text>
          </View>

          <View style={{width: '16%'}}>
            <View
              style={styles.CenterLine}></View>
          </View>

          <View
           style={styles.TopStyling}>
            <TouchableOpacity
              style={[styles.OrderStyling,{marginTop: 26, backgroundColor:'white'}]}>
              <SvgFromXml xml={Xml.BrownTick} />
            </TouchableOpacity>
            <Text>Order Placed</Text>
          </View>
        </View>

        {/* Header End.................. */}
        <View style={styles.InputsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={text => setFullName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>City:</Text>
            <View
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                placeholder="Enter your city"
                value={city}
                onChangeText={text => setCity(text)}
              />
              <TouchableOpacity>
                <SvgFromXml xml={Xml.DropDownIcon} style={{marginRight: 15}} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={text => setAddress(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Payment Method</Text>
            <View
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                },
              ]}>
              <TouchableOpacity onPress={showPopup}>
                <SvgFromXml
                  xml={Xml.DropDownIcon}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '100%'}}>
                {!isPopupVisible && <SvgFromXml xml={selected} />}
              </TouchableOpacity>
              <Text style={{position: 'absolute', right: 15}}>200</Text>
            </View>
          </View>
        </View>

        {/* End Header.................... */}

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ReusableButton
            title="Submit"
            style={styles.btn1}
            onPress={() => Submit()}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isPopupVisible}
          onRequestClose={hidePopup}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 5,
                  backgroundColor: theme.color.lightblack,
                  borderRadius: 30,
                  position: 'absolute',
                  right: 15,
                  top: 18,
                }}
                onPress={hidePopup}>
                <Text>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalHeading}>Payment Methhod</Text>

              {/* CheckBoxes */}
              <View style={styles.checkBoxContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.Jazzcash} />
                  <Text style={styles.checkBoxLabel}>JazzCash</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(Xml.Jazzcash);
                      setSelectedMethod({jcash: true, cash: false});
                    }}
                    style={styles.checkBox}>
                    {selectedMethod.jcash && (
                      <View
                        style={{
                          backgroundColor: theme.color.darkbrown,
                          borderRadius: 30,
                          height: '100%',
                          width: '100%',
                        }}></View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.checkBoxContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgFromXml xml={Xml.Cash} />
                  <Text style={styles.checkBoxLabel}>Cash</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                      setSelected(Xml.Cash);

                      setSelectedMethod({jcash: false, cash: true});
                    }}>
                    {selectedMethod.cash && (
                      <View
                        style={{
                          backgroundColor: theme.color.darkbrown,
                          borderRadius: 30,
                          height: '100%',
                          width: '100%',
                        }}></View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* SVG Image at Right Top */}
              <View style={styles.svgContainer}>
                <SvgFromXml xml={Xml.YourSvgImage} style={styles.svgImage} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default AddToCart2;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
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

  btn1: {
    backgroundColor: theme.color.darkbrown,
    marginRight: 8,
    marginTop: 30,
    marginBottom: 20,
    width: '40%',
  },
  InputsContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: theme.color.darkbrown,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalHeading: {
    fontSize: 20,
    marginBottom: 50,
    marginRight: 50,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
    padding: 3,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: theme.color.darkbrown,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 3,
  },
  checkmark: {
    color: 'white',
  },
  checkBoxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  svgContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  svgImage: {
    width: 30,
    height: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});
