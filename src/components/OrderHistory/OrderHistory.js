import React, { Component } from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>OrderHistory Component</Text>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('OrderHistory_Screen') }}>
          <Text style={{ color: '#007ACC' }}>Go to OrderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
