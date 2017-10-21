import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9C994C' }}>
        <View style={{ flex: 1 }}>
          <Text>Main Screen</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Authentication_Screen', { param: 'Ngoc Dinh' })}
        >
          <Text>Go to Authentication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('OrderHistory_Screen')}
        >
          <Text>Go to OrderHistory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ChangeInfo_Screen')}
        >
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Menu</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

// #E6E6ED
// #F6F6F6