import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

// List screens
export const HomeStack = StackNavigator({
    Main_Screen: {
        screen: Main,
        navigationOptions: {
            title: "Home"
        }
    },
    Authentication_Screen: {
        screen: Authentication,
        navigationOptions: {
            title: "Authen"
        }
    },
    OrderHistory_Screen: {
        screen: OrderHistory,
        navigationOptions: {
            title: "History"
        }
    },
    ChangeInfo_Screen: {
        screen: ChangeInfo,
        navigationOptions: {
            title: "Information"
        }
    },
},
    {
        initialRouteName: 'Main_Screen',
    }
);

//Tabbar
export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack
    }
});