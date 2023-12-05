import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import Xml from '../../../../assets/icons/Xml';
import theme from '../../../../assets/themes/theme';
import { SearchBar } from 'react-native-screens';
import {useNavigation} from '@react-navigation/native';

const FirstBg = () => {
  const navigation = useNavigation()
  const SearchTop=()=>{
  navigation.navigate('BottomSearch2')
  }
  return (
    <View style={styles.mainContainer}>
    <View style={styles.firstbg}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarInnerContainer}>
        <TouchableOpacity onPress={()=>SearchTop()}>      
          <TextInput style={styles.searchBarInput} placeholder="Search" /> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.search} onPress={()=>SearchTop()}>
            <SvgXml xml={Xml.searchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.shop}>
          <SvgXml xml={Xml.shopIcon} style={styles.ShopIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
      <View style={styles.text}>
        <Text style={{color: theme.color.darkwhite, fontFamily: theme.fonts.tinosResular, fontSize: 28, marginTop: 0}}>
          GET UPTO 25% OFF
        </Text>
        <Text style={{color: theme.color.darkwhite, fontFamily: theme.fonts.tinosResular, fontSize: 13, marginTop: 10}}>
            Installment planes with digital with digital payment partners
        </Text>
      </View>
      <View style={styles.images}>
      <Image
          source={require('../../../../assets/images/Dashboardtopbg.png')}
          style={styles.bgimage}
        />
      </View>
      </View>
    </View>
    </View>
  );
};
export default FirstBg;
const styles = StyleSheet.create({
    mainContainer:{
        height: '100%',
        backgroundColor: "#E38D25",
      
    },
    firstbg: {
        height: '30%',
        backgroundColor: "#E38D25",
        alignItems: "center",
        justifyContent: "center"

    },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 9
  },
  searchBarInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.color.lightbrown,
    borderColor: theme.color.lightbrown,
    borderWidth: 1,
    borderWidth: 1,
    borderRadius: 8,
  },
  searchBarInput: {
    flex: 1,
    padding: 3,
    
  },
  searchIcon: {
    width: 18,
    height: 18
  },
  search: {
    backgroundColor: theme.color.darkwhite,
    borderRadius: 8,
    marginLeft: 0,
    padding: 10,
    position: 'absolute',
    right:0 ,
    alignItems:"center",
    justifyContent:"center" 
  },
  ShopIcon: {
   width: 13,
   height: 15
  },
  shop: {
    backgroundColor: theme.color.darkwhite,
    borderRadius: 30,
    marginLeft: 9,
    padding: 12,
  },
  content:{
   flexDirection: 'row',
   width: '92%',
   paddingTop: 20,
   justifyContent: "space-around"

  },
  text:{
    width: '60%'
  },
  bgimage:{
    width: 115,
    height: 115,
    marginTop: 15
  }
});
