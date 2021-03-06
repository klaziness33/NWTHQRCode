import React, {Component} from 'react';
import {Image} from 'react-native';

import TabQRcode from './TabQRcode';
import TabScanner from './TabScanner';
import ScannerScreen from './ScannerScreen';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const tab1_Option = {
  tabBarLabel: 'QRcode',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_qr_code_press.png')
          : require('./assets/img/ic_qr_code_normal.png')
      }
    />
  ),
};

const tab2_Option = {
  tabBarLabel: 'Scanner',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_qr_scan_press.png')
          : require('./assets/img/ic_qr_scan_normal.png')
      }
    />
  ),
};

const TabScreen = createBottomTabNavigator(
  {
    // writeScreen: {screen: TabQRcode, navigationOptions: tab1_Option},
    readScreen: {screen: TabScanner, navigationOptions: tab2_Option},
  },
  {
    initialRouteName: 'readScreen',
  },
);

const AppStack = createStackNavigator(
  {
    tabScreen: {screen: TabScreen, navigationOptions: {header: null}},
    scanScreen: {screen: ScannerScreen},
  },
  {
    initialRouteName: 'tabScreen',
  },
);

export default createAppContainer(AppStack);
