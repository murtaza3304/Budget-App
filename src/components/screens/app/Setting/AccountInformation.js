import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Xml from '../../../../assets/icons/Xml'
import { SvgFromXml } from 'react-native-svg'
import theme from '../../../../assets/themes/theme'
import {useNavigation} from '@react-navigation/native'
import UserProfile from '../UserProfile'

const AccountInformation = () => {
    const navigation = useNavigation()

    const AccountInformation =()=>{
        navigation.navigate('AccountInformation')
    }
    const BackSetting =()=>{
        navigation.navigate('Setting')
    }
  return (<>
  <View style={styles.lineTop}></View>
    <View style={styles.container}>
      <View style={styles.TopHeader}>
      <TouchableOpacity style={styles.ArrowForBack} onPress={()=>BackSetting()}>
      <SvgFromXml xml={Xml.ArrowForBack}/>
      </TouchableOpacity>
      <Text style={styles.HeadingTop}>Account Information</Text>
      </View>
      <View style={styles.SettingContant}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>AccountInformation()}>
            <Text style={styles.fontStyles}>Full Name</Text>
            <Text>Ahmad Hassan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Change Password</Text>
            <SvgFromXml xml={Xml.DropSide}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Change Email</Text>
            <Text>abc@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.fontStyles}>Female</Text>
            <SvgFromXml xml={Xml.DropSide}/>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default AccountInformation
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
        width: "80%",
        justifyContent: 'space-between'
    },
    ArrowForBack: {
       padding: 8,
       backgroundColor: theme.color.grey,
       borderRadius: 5
    },
    HeadingTop: {
        fontSize: 18,
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