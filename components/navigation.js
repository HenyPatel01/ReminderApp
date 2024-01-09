import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddReminderScreen from '../screens/AddReminderScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={true}
      barStyle={{ backgroundColor: 'lightblue' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Add Reminder') {
            iconName = 'add-circle';
          }
          const iconColor = focused ? 'black' : '#2c4766';

          return <Ionicons name={iconName} size={20} color={iconColor} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Reminder" component={AddReminderScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
