import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/components/screens/auth/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/components/screens/app/AppStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <NavigationContainer>
  <AppStack/> 
 </NavigationContainer>
 </GestureHandlerRootView>  

  )
}

export default App

const styles = StyleSheet.create({})