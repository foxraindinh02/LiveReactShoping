import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

// List screens
export const Stack = StackNavigator({
    Main_Screen: {
        screen: Main
    },
    Authentication_Screen: {
        screen: Authentication,
    },
    OrderHistory_Screen: {
        screen: OrderHistory
    },
    ChangeInfo_Screen: {
        screen: ChangeInfo
    },
},
    {
        initialRouteName: 'Main_Screen',
    }
);
