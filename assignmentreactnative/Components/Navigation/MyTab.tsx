import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Viewhome from '../ViewHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

type MyTabsProps = {};

const MyTabs: React.FC<MyTabsProps> = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
              return <Ionicons name={"ios-home-sharp"} size={size} color={color} />;
          } 
          else if (route.name === 'ViewandEdit') {
              return <FontAwesome name={"edit"} size={size} color={color} />;
          }
          // return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#1D3932',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:50},
      tabBarLabelStyle:{paddingBottom:3},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ViewandEdit" component={Viewhome} />
    </Tab.Navigator>
  );
};

export default MyTabs;

// , tabBarStyle:{backgroundColor:'green'}


