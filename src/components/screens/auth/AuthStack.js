import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SplashScreen from './SplashScreen';
import WellCome from './WellCome';
import SignUpSignInBg from './SignUpSignInBg';
import Verification from './Verification/LoginVerificationCode';
import InputNewPassword from './Verification/InputNewPassword';
import SignUpSuccess from './SignUpSuccess';
import Login from '../auth/signinfolder/LogIn';
import ResetPassword from './signinfolder/ResetPassword';
import CreateNewPassword from './signinfolder/CreateNewPassword';
import ResetNewPasswordSuccess from './signinfolder/ResetNewPasswordSuccess';
import ResetVerificationCode from './signinfolder/ResetVerificationCode';
// import FirstBg from './dashboard/FirstBg';
import MainDashboard from '../app/dashboard/MainDashboard';
import Cards from '../app/dashboard/Cards';
import AppStack from '../app/AppStack';
import LoginVerificationCode from './Verification/LoginVerificationCode';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WellCome" component={WellCome} />
{/* SignUp Protion */}
<Stack.Screen name="SignUp" component={SignUp} />
<Stack.Screen name="LoginVerificationCode" component={LoginVerificationCode}/>
<Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
<Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
{/* LogIn Portion */}
 <Stack.Screen name="Login" component={Login} />
<Stack.Screen name="ResetPassword" component={ResetPassword} />
 {/*keyboardavoiding View Not working*/}
<Stack.Screen name="ResetVerificationCode" component={ResetVerificationCode}/>
<Stack.Screen name="InputNewPassword" component={InputNewPassword} /> 
 <Stack.Screen  name="ResetNewPasswordSuccess"  component={ResetNewPasswordSuccess} />

      <Stack.Screen name="App" component={AppStack} />




          {/* to be sorted */}
    

      {/* delete */}
      <Stack.Screen name="SignUpSignInBg" component={SignUpSignInBg} />
      {/* <Stack.Screen name='FirstBg' component={FirstBg}/> */}

    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
