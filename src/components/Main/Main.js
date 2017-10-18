import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9C994C' }}>
        <Text>Main Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Authentication_Screen')}
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
      </View>

    );
  }
}

// #E6E6ED
// #F6F6F6