import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Xml from '../../../../assets/icons/Xml'
import { SvgFromXml } from 'react-native-svg'
import theme from '../../../../assets/themes/theme'
import {useNavigation} from '@react-navigation/native'
import UserProfile from '../UserProfile'
import AddressBook from './AddressBook'

const Setting = () => {
    const navigation = useNavigation()

    const AccountInformation =()=>{
        navigation.navigate('AccountInformation')
    }
    const UserProfile =()=>{
        navigation.goBack()
    }
    const AddressBook = () => {
        navigation.navigate('AddressBook')
    }
  return (<>
  <View style={styles.lineTop}></View>
    <View style={styles.container}>
      <View style={styles.TopHeader}>
      <TouchableOpacity style={styles.ArrowForBack} onPress={()=>UserProfile()}>
      <SvgFromXml xml={Xml.ArrowForBack}/>
      </TouchableOpacity>
      <Text style={styles.HeadingTop}>Settings</Text>
      </View>

      <View style={styles.SettingContant}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>AccountInformation()}>
            <Text style={styles.fontStyles}>Account Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>AddressBook()}>
            <Text style={styles.fontStyles}>Address Book</Text>
            <SvgFromXml xml={Xml.DropSide}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Message</Text>
            <SvgFromXml xml={Xml.DropSide}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Country</Text>
            <SvgFromXml xml={Xml.DropDownBlack}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Currency</Text>
            <SvgFromXml xml={Xml.DropDownBlack}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Language</Text>
            <SvgFromXml xml={Xml.DropDownBlack}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default Setting
const styles = StyleSheet.create({
    lineTop:{
        width: "100%",
        backgroundColor: theme.color.grey,
        height: 1,
        marginTop: 45
    },
    container: {
        width: '100%',
        paddingHorizontal: 40,
       
    },
    
    TopHeader:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: "65%",
        justifyContent: 'space-between'
    },
    ArrowForBack: {
       padding: 8,
       backgroundColor: theme.color.grey,
       borderRadius: 5
    },
    HeadingTop: {
        fontSize: 22,
        fontFamily: theme.fonts.tinosBold,
        color: 'black'
    },
    SettingContant:{
        marginTop: 50,
        width: "100%",
        justifyContent: 'center'
    },
    TouchableOpacity: {
        justifyContent: 'space-between',
        width: "95%",
        flexDirection: 'row',
        marginVertical: 12
        
    },
    fontStyles:{
        color: 'black',
        fontSize: 17,
        fontFamily: theme.fonts.tinosBold
    }
})