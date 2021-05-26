import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Bedroom from '../rooms/Bedroom'
import Blutooth from '../components/Blutooth'

 const SmartHome = createStackNavigator(
  {
    Login,
    Dashboard,
    Bedroom,
    Settings,
    Blutooth
  },
  {
    initialRouteName: 'Blutooth',
  }
);

export default createAppContainer(SmartHome)
