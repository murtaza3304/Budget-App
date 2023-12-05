import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../../../assets/themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import ReusableButton from '../auth/Button';
import Cards from './dashboard/Cards';
import {useNavigation} from '@react-navigation/native';

const ProductInnerPage = ({route}) => {
  const image = route.params?.image?route.params.image:undefined

  const ThreeDots = event => {
    const {nativeEvent} = event;
    const {pageX, pageY} = nativeEvent;

    setPopupPosition({x: pageX, y: pageY});
    setShowModal(true);
  };
  const [popupPosition, setPopupPosition] = useState({x: 0, y: 0});
  const [showModal, setShowModal] = useState(false);
  const closePopup = () => {
    setShowModal(false);
  };

  const navigation = useNavigation();

  const toggleNextScreen = () => {
    navigation.navigate('AddToChart');
    setModalVisible(false);
  };

  const renderItem1 = ({item}) => (
    <Cards image={item.image} imageStyle={styles.cardsIcon} />
  );

  const data = [
    {
      id: '1',
      image: require('../../../assets/images/image11.jpg'),
    },
    {
      id: '2',
      image: require('../../../assets/images/image7.jpg'),
    },
    {
      id: '3',
      image: require('../../../assets/images/image7.jpg'),
    },
  ];

  // increment and decrement function

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // end.....................

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const BackButton = () => {
    navigation.navigate('BottomTabs');
  };
  const Filter = () => {
    navigation.navigate('BottomSearch2');
  };

  return (
    <>
        
        <View style={styles.headerSection}>
        <TouchableOpacity style={styles.arrrowbtn} onPress={() => BackButton()}>
          <SvgFromXml xml={Xml.ArrowForBack} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '63%',
            alignItems: 'center',
            marginLeft: 10,
            // backgroundColor:"green",
            borderRadius: 5,
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: theme.color.offwhite,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 4
            }}>
            <TextInput
              placeholder="Ladies"
              style={{fontFamily: theme.fonts.tinosResular}}
            />
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: theme.color.white,
                position: 'absolute',
                right: 50,
                paddingHorizontal: 4,
              }}>
              <Text
                style={{fontFamily: theme.fonts.tinosResular, fontSize: 10}}>
                X
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchIcon}
              onPress={() => Searching()}>
              <SvgFromXml xml={Xml.bottomSearchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '16%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-around',
            paddingLeft: 5,
          }}>
          <TouchableOpacity>
            <SvgFromXml xml={Xml.BagTop} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Filter()}>
            <SvgFromXml xml={Xml.filterSvg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ThreeDots}>
            <SvgFromXml xml={Xml.ThreeDots} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      
        <View style={styles.ContantContainer}>
          <Image source={image?image:null} style={styles.Image} />
          <View style={{flexDirection: 'row', marginTop: 12, width: '100%'}}>
            <Text
              style={{
                color: theme.color.darkbrown,
                fontSize: 18,
              }}>
              Rs 2355
            </Text>
            <Text
              disabled
              style={{textDecorationLine: 'line-through', marginLeft: 7}}>
              Rs 5450
            </Text>
            <SvgFromXml xml={Xml.heartIcon} style={styles.heartIcon} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <SvgFromXml xml={Xml.RatingStar} style={{marginRight: 7}} />
            <Text>4.5/5.203 SOLD</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 7,
            }}>
            <TouchableOpacity>
              <Text>Free Delivery</Text>
            </TouchableOpacity>
            <SvgFromXml xml={Xml.filterRightArrow} />
          </View>
          <View style={{marginTop: 10}}>
            <Text>Name: Ali Murtaza</Text>
            <Text>Brand: Bata</Text>
            <Text> specific requirements.</Text>
            <Text>Collection: Spring Summer Volume 02'23</Text>
            <Text>Fabric: lawn</Text>
            <Text>Item: 3 Peaces Unstitched</Text>
            <Text style={{marginTop: 12}}>Detail:</Text>
            <Text>Shirt</Text>
            <Text>Digital Printed Lawn : 3M</Text>
            <Text>Dopatta</Text>
            <Text>Digital Printed Voil:</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <ReusableButton
              title="Add To Cart"
              style={styles.btn}
              onPress={toggleModal}
            />
          </View>
        </View>
       
      </View>
      </ScrollView>
     
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Image
                  source={require('../../../assets/images/image4.jpg')}
                  style={styles.popupImage}
                /> */}
                <Image source={image} style={styles.popupImage} />
                <View style={{marginLeft: 7}}>
                  <Text
                    style={{
                      color: theme.color.darkbrown,
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    Rs 2355
                  </Text>
                  <Text
                    disabled
                    style={{textDecorationLine: 'line-through', marginLeft: 7}}>
                    Rs 5450
                  </Text>
                  <Text style={{marginLeft: 7}}>Green Adjustable</Text>
                </View>
              </View>
              <View>
                <Text style={styles.heading}>Color Family</Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={renderItem1}
                  style={styles.card}
                />
              </View>
              <View>
                <Text style={styles.heading}>Size</Text>
                <View style={{flexDirection: 'row'}}>
                  <ReusableButton
                    title="Small"
                    style={styles.btn1}
                    onPress={() => SizeBtn()}
                  />
                  <ReusableButton
                    title="Mediam"
                    style={styles.btn1}
                    onPress={() => SizeBtn()}
                  />
                  <ReusableButton
                    title="Large"
                    style={styles.btn1}
                    onPress={() => SizeBtn()}
                  />
                </View>
               
              </View>
              <View>
                <Text style={[styles.heading, {marginTop: 12}]}>Quality</Text>
                <View style={styles.CountQuality}>
                  <TouchableOpacity
                    style={[
                      styles.qualityBtn,
                      {
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                        paddingLeft: 16,
                      },
                    ]}
                    onPress={decreaseQuantity}>
                    <Text style={{fontSize: 18}}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.IncreDecre}>{quantity}</Text>
                  <TouchableOpacity
                    style={[
                      styles.qualityBtn,
                      {borderTopRightRadius: 12, borderBottomRightRadius: 12},
                    ]}
                    onPress={increaseQuantity}>
                    <Text style={{fontSize: 18}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                <ReusableButton
                  title="Add To Cart"
                  style={styles.btn}
                  onPress={toggleNextScreen}
                />
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* 2nd modal........................ */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={closePopup}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={closePopup}>
            <View
              style={{
                position: 'absolute',
                top: popupPosition.y - 1, // Adjust this value to position the popup properly
                left: popupPosition.x - 145,
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Text>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 2}}>
                <Text>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 2}}>
                <Text>My account </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 2}}>
                <Text>Need Help</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default ProductInnerPage;

const styles = StyleSheet.create({

  btn: {
    backgroundColor: theme.color.darkbrown,
    paddingHorizontal: 15,
    marginBottom: 45
  },
  headerSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    height: 35,
  },
  arrrowbtn: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.color.offwhite,
    // left: 22,
    marginTop: 2,
    marginLeft: 15
  },
  searchIcon: {
    backgroundColor: theme.color.darkbrown,
    justifyContent: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 4,
    position: 'absolute',
    right: 0,
  },
  container: {
    width: '100%',
    height:700,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContantContainer: {
    width: '90%',
    height: '90%',
    borderColor: theme.color.offwhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    paddingHorizontal: 20,
    backgroundColor: theme.color.offwhite,
    paddingVertical: 13,
    marginBottom: 15
  },
  Image: {
    width: '100%',
    height: '30%',
    borderRadius: 12,
  },
  heartIcon: {
    width: 20,
    height: 20,

    position:'absolute',
    right: 4
  },
  modalContainer: {
    flex: 1,
    marginTop: '55%',
    top: 10,
    justifyContent: 'flex-end', // Update this line
  },
  modalContent: {
    backgroundColor: theme.color.offwhite,
    height: '70%',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  popupImage: {
    width: '25%',
    height: 100,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: theme.color.lightblack,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 16,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  closeButtonText: {
    color: theme.color.offwhite,
    fontFamily: theme.fonts.tinosBold,
  },
  card: {
    borderColor: '#ddd',
    overflow: 'hidden',
    height: 130,
  },
  image: {
    height: 100,
    width: '90%',
    borderRadius: 10,
  },
  cardsIcon: {
    width: 100,
    height: 100,
  },
  heading: {
    marginTop: 6,
    fontFamily: theme.fonts.tinosBold,
    color: 'black',
    fontSize: 18,
  },
  btn1: {
    backgroundColor: theme.color.black,
    paddingHorizontal: 15,
    marginRight: 8,
  },
  qualityBtn: {
    backgroundColor: theme.color.lightblack,
    paddingHorizontal: 13,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IncreDecre: {
    backgroundColor: theme.color.offwhite,
    paddingHorizontal: 13,
    paddingVertical: 9,
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.black,
  },
  CountQuality: {
    padding: 3,
    borderRadius: 8,
    // width:"30%",
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 12,
    shadowColor: theme.color.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
