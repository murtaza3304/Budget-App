import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import FirstBg from './FirstBg';
import theme from '../../../../assets/themes/theme';
import Xml from '../../../../assets/icons/Xml';
import {SvgXml} from 'react-native-svg';
import Cards from './Cards';
import FlashComponent from './FlashComponent';
import JustForYouStyle from './JustForYou';

const MainDashboard = () => {
  const data = [
    {
      id: '1',
      image: require('../../../../assets/images/image1.jpg'),
      title: 'mart',
    },
    {
      id: '2',
      image: require('../../../../assets/images/image2.jpg'),
      title: 'Fasion',
    },
    {
      id: '3',
      image: require('../../../../assets/images/image3.jpg'),
      title: 'Beauty',
    },
    {
      id: '4',
      image: require('../../../../assets/images/image4.jpg'),
      title: 'Home & Deco',
    },
    // Add more data as needed
  ];
  const data2 = [
    {
      id: '1',
      image: require('../../../../assets/images/image5.jpg'),
      title: 'Laptop',
    },
    {
      id: '2',
      image: require('../../../../assets/images/image6.jpg'),
      title: 'Style Dresses',
    },
    {
      id: '3',
      image: require('../../../../assets/images/image7.jpg'),
      title: 'Fasion Wallets',
    },
    // Add more data as needed
  ];
  const data3 = [
    {
      id: '1',
      flashImage: require('../../../../assets/images/image8.jpg'),
      flashTitle: 'RS 1499',
    },
    {
      id: '2',
      flashImage: require('../../../../assets/images/image11.jpg'),
      flashTitle: 'RS 1499',
    },
    {
      id: '3',
      flashImage: require('../../../../assets/images/image12.jpg'),
      flashTitle: 'RS 1499',
    },
    // Flash Images
  ];
  const data4 = [
    {
      id: '1',
      image: require('../../../../assets/images/image13.jpg'),
      title: 'Hair treatment',
    },
    {
      id: '2',
      image: require('../../../../assets/images/image14.jpg'),
      title: 'cooking oil',
    },
    {
      id: '3',
      image: require('../../../../assets/images/image15.jpg'),
      title: 'Smart watches',
    },
    {
      id: '4',
      image: require('../../../../assets/images/image16.jpg'),
      title: 'lipssticks',
    },
    // Add more data as needed
  ];
  const data5 = [
    {
      id: '1',
      image: require('../../../../assets/images/image17.jpg'),
      title: 'Empiron copper chain Girls bracelet pearl',
    },
    {
      id: '2',
      image: require('../../../../assets/images/image18.jpg'),
      title: 'Kolha puri women chaple flat',
    },
    {
      id: '3',
      image: require('../../../../assets/images/image19.jpg'),
      title: 'Pale Blue Rose Rosie smocked dress',
    },
    {
      id: '4',
      image: require('../../../../assets/images/image20.jpg'),
      title: 'Vembley Korean Butterfly Tessal Earrings',
    },
    // Add more
  ];

  const renderItem1 = ({item}) => (
    <Cards
      image={item.image}
      title={item.title}
      cardStyle={{width: 80, height: 100, marginTop: 0}}
      imageStyle={{height: 71, width: 71}}
      titleStyle={{
        color: theme.color.lightblack,
        fontSize: 12,
        fontFamily: theme.fonts.tinosResular,
      }}
    />
  );
  const renderItem2 = ({item}) => (
    <Cards
      image={item.image}
      title={item.title}
      imageStyle={{height: 105, width: 115}}
      titleStyle={{
        color: theme.color.lightblack,
        fontSize: 12,
        fontFamily: theme.fonts.tinosResular,
      }}
      cardStyle={{width: 115, height: 129}}
    />
  );
  const renderItem3 = ({item}) => (
    <FlashComponent
      flashImage={item.flashImage}
      flashTitle={item.flashTitle}
      flashImageStyle={{height: 115, width: 120, borderRadius: 9}}
      flashTitleStyle={{
        color: theme.color.brown,
        fontSize: 10,
        fontFamily: theme.fonts.tinosBold,
      }}
      flashStyle={{width: 120, height: 180}}
    />
  );
  
  const renderItem4 = ({item}) => (
    <Cards
      image={item.image}
      title={item.title}
      imageStyle={{height: 100, width: 124}}
      titleStyle={{
        color: theme.color.lightblack,
        fontSize: 12,
        fontFamily: theme.fonts.tinosResular,
      }}
    
    />);
     const renderItem5 = ({item}) => (
      <JustForYouStyle
        image={item.image}
        title={item.title}
        forYOuImageStyle={{height: 140, width: 150}}
        forYouTitleStyle={{
          color: theme.color.lightblack,
          fontSize: 12,
          fontFamily: theme.fonts.tinosResular,
          alignItems: 'center'
        }} justForYouStyle={{width: 150, height: 180}}
      />
    );
 

  return (
    <>
      <View style={[styles.mainContainer, {marginTop:0}]}>
        <FirstBg />
      </View>   
<View style={styles.contentContainer}>
<View style={styles.locationTop}>
            <SvgXml xml={Xml.locationIcron} style={{marginRight: 9}} />
            <Text
              style={{
                fontFamily: theme.fonts.tinosResular,
                color: theme.color.black,
              }}>
              Punjab, Faisalabad, city Batala Colony
            </Text>
          </View>
      <View style={{paddingHorizontal:20,marginTop:20,flex:1}}>
        <ScrollView horizontal={false}  showsVerticalScrollIndicator={false} >
      


          {/* Card Component */}
          <View  style={{marginTop:0}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem1}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 5,
                fontFamily: theme.fonts.tinosBold,
                color: theme.color.black,
                fontSize: 22,
              }}>
              Cotegories
            </Text>
            <Text>Inspired by your intrest</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data2}
              keyExtractor={item => item.id}
              renderItem={renderItem2}
            />
          </View>
          <View style={styles.FlashSale}>
            <Text
              style={{
                fontFamily: theme.fonts.tinosBold,
                fontSize: 22,
                color: theme.color.black,
                marginTop: 9,
              }}>
              Flash Sale
            </Text>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data3}
                keyExtractor={item => item.id}
                renderItem={renderItem3}
              />
            </View>
            {/* bg */}
            <View style={styles.bottomBg}>
              <View style={{top: 8, width: 200, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: theme.fonts.tinosResular,
                    color: theme.color.white,
                  }}>
                  Hair styling Appliances
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: theme.fonts.tinosResular,
                    color: theme.color.white,
                  }}>
                  Best Price Guarandeed
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.color.white,
                  width: 76,
                  bottom: -10,
                  padding: 5,
                  borderBottomRightRadius: 12,
                  borderTopRightRadius: 10,
                }}>
                <Text style={{color: theme.color.brown, paddingVertical: 3}}>
                  Buy Now
                </Text>
              </TouchableOpacity>
              <Image
                source={require('../../../../assets/images/MainBgImage.png')}
                style={{
                  position: 'absolute',
                  width: 113,
                  height: 117,
                  right: 14,
                  bottom: 1,
                }}
              />
            </View>
           
            

          </View>
           {/* Trending */}
           <View>
              <Text style={{marginTop: 12, fontFamily: theme.fonts.tinosBold, color: theme.color.black, fontSize: 24}}>Trending</Text>

              <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data4}
              keyExtractor={item => item.id}
              renderItem={renderItem4}      
            />
            </View>
          {/* Just For You */}
          <View>
          <Text style={{marginTop: 12, fontFamily: theme.fonts.tinosBold, color: theme.color.black, fontSize: 24}}>Just For You</Text>
          <FlatList 
              data={data5}
              keyExtractor={item => item.id}
              renderItem={renderItem5}
              numColumns={2}
            />
          </View>  
          <View style= {{width: "100%", height: 60, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.dotbutton}></TouchableOpacity>
          <TouchableOpacity style={styles.dotbutton}></TouchableOpacity>
          
          </View> 
      <View style={{height:70,width:'auto'}}></View>
        </ScrollView>
      </View>
      </View>
      

    </>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  
  bottomMenuBar:{
    width: "100%",
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: theme.color.darkbrown,
    bottom: 0,

  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#E38D25',
    width: '100%',
    paddingHorizontal: 20,
    
  },
  firstbg: {
    backgroundColor: '#E38D25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: "white",
    borderTopColor: 'black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // paddingHorizontal: 20,
    alignItems: "center",
    justifyContant: 'center',
    paddingTop:10,
    position: 'absolute',
    width: '100%',
    height: '73%',
    bottom: 0,
    // zIndex: 1,
  },
  locationTop: {
    Position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    // paddingHorizontal: 32,
    marginHorizontal:3,
    
    borderRadius: 15,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.37,
    shadowRadius: 4,
    elevation: 12,
  },
  bottomBg: {
    backgroundColor: theme.color.darkbrown,
    width: '100%',
    height: 123,
    marginTop: 25,
    borderRadius: 19,
  },
  dotbutton: {
    width: 9,
     height: 9,
      borderRadius:50,
       backgroundColor:
        theme.color.darkbrown,
        margin: 8
  }
});
