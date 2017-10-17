import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { StackNavigator} from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

export const HomeStack = StackNavigator({
    Main_Screen: {
        screen: Main
    }
});
