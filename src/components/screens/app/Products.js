import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../../../assets/themes/theme';
import {SvgFromXml} from 'react-native-svg';
import Xml from '../../../assets/icons/Xml';
import ComponentForProduct from './ComponentForProduct';
import ImagesForProducts from './ImagesForProduct';
import {useNavigation} from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();
  const data1 = [
    {
      id: '1',
      image: require('../../../assets/images/image9.jpg'),
      title: 'Printed Dress',
    },
    {
      id: '2',
      image: require('../../../assets/images/image4.jpg'),
      title: 'hand shake',
    },
    {
      id: '3',
      image: require('../../../assets/images/image2.jpg'),
      title: 'wedding Dress',
    },
    {
      id: '4',
      image: require('../../../assets/images/image1.jpg'),
      title: 'designer ',
    },
    {
      id: '5',
      image: require('../../../assets/images/image10.jpg'),
      title: 'special',
    },
    {
      id: '6',
      image: require('../../../assets/images/image15.jpg'),
      title: 'Rent ',
    },
  ];

  const [data, setData] = useState([
    {id: '1', pressed: true, title: 'All', svgImage: Xml.TickIcon},
    {id: '2', pressed: false, title: 'Top Sales', svgImage: Xml.FireIcon},
    {id: '3', pressed: false, title: 'Best Matches', svgImage: Xml.LikeIcon},
    {id: '4', pressed: false, title: 'Trending', svgImage: Xml.TrendingIcon},
  ]);
  const renderItem = ({item}) => (
    <ComponentForProduct
      item={item}
      onPress={() => handleButtonPress(item.id)}
    />
  );

  const renderItem1 = ({item}) => (
    <ImagesForProducts image={item.image} title={item.title} />
  );

  const handleButtonPress = id => {
    const newArray = data.map(item => {
      if (item.id === id) {
        return {...item, pressed: true};
      } else {
        return {...item, pressed: false};
      }
    });
    setData(newArray);
  };
  const [popupPosition, setPopupPosition] = useState({x: 0, y: 0}); // Add this line
  const [showModal, setShowModal] = useState(false);

  // ... (rest of your code)

  const ThreeDots = event => {
    const {nativeEvent} = event;
    const {pageX, pageY} = nativeEvent;

    setPopupPosition({x: pageX, y: pageY});
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };

  const BackButton = () => {
    navigation.navigate('MainDashboard');
  };

  return (
    <SafeAreaView>
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.arrrowbtn} onPress={() => BackButton()}>
          <SvgFromXml xml={Xml.ArrowForBack} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '65%',
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
            width: '20%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
            justifyContent: 'space-around',
            paddingLeft: 5,
          }}>
          <TouchableOpacity>
            <SvgFromXml xml={Xml.BagTop} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgFromXml xml={Xml.filterSvg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ThreeDots}>
            <SvgFromXml xml={Xml.ThreeDots} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingVertical: 20}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 7,
          width: '100%',
          height: '72%',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{flex:1}}
          data={data1}
          keyExtractor={item => item.id}
          renderItem={renderItem1}
          numColumns={2}
        />
      </View>

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
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 35,
  },
  arrrowbtn: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.color.offwhite,
    marginTop: 2,
  },
  searchIcon: {
    backgroundColor: theme.color.darkbrown,
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 3,
    position: 'absolute',
    right: 0,
  },
});
