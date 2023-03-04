import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import ViewEdit from '../ViewAndEdit';

const Tab = createBottomTabNavigator();

type MyTabsProps = {};

const MyTabs: React.FC<MyTabsProps> = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarShowLabel: true}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ViewandEdit" component={ViewEdit} />
    </Tab.Navigator>
  );
};

export default MyTabs;

// , tabBarStyle:{backgroundColor:'green'}