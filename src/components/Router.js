import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

// Hiding the header for all the screen
// headerMode: 'none'
// Hiding the header for a specific screen
// static navigationOptions = { header: null };

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
        headerMode: 'none'
    }
);

//Tabbar
export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: "Home"
        },
    },
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#2C2C2C'
        },
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8B433'
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true
}
);

//Drawer 
export const SideMenu = DrawerNavigator({
    Tab: {
        screen: Tabbar,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
              <Image
                source={require('../../src/menu.png')}
                style={[styles.icon, {tintColor: tintColor}]}
              />
            ),
          }
    }
},
    {
        drawerWidth: 230,
        drawerPosition: 'left',
        contentComponent: props => <OrderHistory {...props} />
    }
);