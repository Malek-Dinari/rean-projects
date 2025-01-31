import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DiplomesScreen from '../screens/DiplomesScreen';
import ProjetsScreen from '../screens/ProjetsScreen';
import ContactScreen from '../screens/ContactScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Diplomes') {
          iconName = focused ? 'school' : 'school-outline';
        } else if (route.name === 'Projets') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'mail' : 'mail-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diplomes" component={DiplomesScreen} />
      <Tab.Screen name="Projets" component={ProjetsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;