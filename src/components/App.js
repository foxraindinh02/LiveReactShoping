import React, { Component } from 'react';
import { Text,View, StatusBar } from 'react-native';
import {Tabbar} from './Router';

// Hiding the Status Bar
StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Tabbar />
      </View>
    );
  }
}