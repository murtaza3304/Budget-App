import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import SplashScreen from '../auth/SplashScreen';
import Chat from './Chat';
import BottomSearch from './BottomSearch';
import BottomSearch2 from './BottomSearch2';
import BottomSearch3 from './BottomSearch3';
import SearchHistory from './SearchHistory';
import Searching from './Searching';
import Products from './Products';
import ProductInnerPage from './ProductInnerPage';
import AddToChart from './AddToChart';
import AddToCart2 from './AddToCart2';
import Check from './Check';
import AddToCart3 from './AddToCart3';
// User Profile
import UserProfile from './UserProfile';
import PendingComponent from './PendingComponent';
import Pending from './Pending';
import Review from './Review';
import Shipped from './Shipped';
import Processing from './Processing';
// Setting
import Setting from './Setting/Setting';
import AccountInformation from './Setting/AccountInformation';
import AddressBook from './Setting/AddressBook';
import MainDashboard from './dashboard/MainDashboard';
import ImagesForProducts from './ImagesForProduct';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      {/* Components */}
      <Stack.Screen name="ImagesForProducts" component={ImagesForProducts} />
      <Stack.Screen name="PendingComponent" component={PendingComponent} />

      {/* Searching */}
      {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}


      <Stack.Screen name="BottomSearch2" component={BottomSearch2} />
      <Stack.Screen name="BottomSearch3" component={BottomSearch3} />
      <Stack.Screen name="SearchHistory" component={SearchHistory} />
      <Stack.Screen name="Searching" component={Searching} />

      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductInnerPage" component={ProductInnerPage} />
      <Stack.Screen name="AddToChart" component={AddToChart} />
      <Stack.Screen name="AddToCart2" component={AddToCart2} />
      <Stack.Screen name="AddToCart3" component={AddToCart3} />

      {/* User */}
      <Stack.Screen name="UserProfile" component={UserProfile} />

      {/* Setting  */}
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="AccountInformation" component={AccountInformation} />
      <Stack.Screen name="AddressBook" component={AddressBook} />

      {/* My Order UserProfile */}
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Processing" component={Processing} />
      <Stack.Screen name="Shipped" component={Shipped} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
