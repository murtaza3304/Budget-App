import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MesgeComponent from './dashboard/MainDashboard';
import Xml from '../../../assets/icons/Xml';
import {SvgFromXml} from 'react-native-svg';
import MainDashboard from './dashboard/MainDashboard';
import BottomSearch from './BottomSearch';
import Contact from './Contact';
// import ShopBottom from './ShopBottom';
import Chat from './Chat';
import theme from '../../../assets/themes/theme';
import LinearGradient from 'react-native-linear-gradient';
import Products from './Products';
import UserProfile from "./UserProfile"
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const tabStyle = {
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
  };
  return (
    <Tab.Navigator
    initialRouteName="MainDashboard"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          height: 0,
          width: 0,
        },
        tabBarStyle: {
          // backgroundColor:'green',
          borderTopWidth: 0,
          position:"absolute",
          height: 67,
    
        },
        tabBarBackground:()=>(
          <LinearGradient colors={theme.color.linearGradient2} style={{height:'100%',width:"100%",backgroundColor:"green"}}></LinearGradient>
        )
    
      
      }}>
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={
                focused
                  ? theme.color.linearGradient1
                  : ['transparent', 'transparent']
              }
              style={tabStyle}>
              <SvgFromXml xml={Xml.mesgeIcon} style={{}} />
            </LinearGradient>
          ),
        }}
      />

      <Tab.Screen
        name="BottomSearch"
        component={BottomSearch}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={
                focused
                  ? theme.color.linearGradient1
                  : ['transparent', 'transparent']
              }
              style={tabStyle}>
              <SvgFromXml xml={Xml.bottomSearchIcon} style={{}} />
            </LinearGradient>
          ),
        }}
      />

      <Tab.Screen
        name="MainDashboard"
        component={MainDashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={
                focused
                  ? theme.color.linearGradient1
                  : ['transparent', 'transparent']
              }
              style={tabStyle}>
              <SvgFromXml xml={Xml.homeIcon} color={'black'} />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={
                focused
                  ? theme.color.linearGradient1
                  : ['transparent', 'transparent']
              }
              style={tabStyle}>
              <SvgFromXml xml={Xml.storeIcon} style={{}} />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={
                focused
                  ? theme.color.linearGradient1
                  : ['transparent', 'transparent']
              }
              style={tabStyle}>
              <SvgFromXml xml={Xml.contactIcon} style={{}} />
            </LinearGradient>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;

const styleFocused = {};
