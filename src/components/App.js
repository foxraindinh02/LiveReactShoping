import React, { Component } from 'react';
import { Text,View, StatusBar } from 'react-native';
import { StackNavigator} from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


// Hiding the Status Bar
StatusBar.setHidden(true);

// List screens
export const Home = StackNavigator({
  Main_Screen: {
      screen: Main,
      initialRouteName: true,
  },
  Authentication_Screen: {
    screen: Authentication,
  },
  ChangeInfo_Screen: {
    screen: ChangeInfo
  },
  OrderHistory_Screen: {
    screen: OrderHistory,
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F3F3F3', justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
}

