import React, { Component } from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text>Main Component</Text>
        <TouchableOpacity style={{ backgroundColor: '#007ACC', alignContent: 'center', alignItems: 'center' }}
          onPress={() => { this.props.navigation.navigate('Authentication_Screen') }}>
          <Text style={{ color: '#007ACC' }}>Go to Authentication</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('OrderHistory_Screen') }}>
          <Text style={{ color: '#CCCEDB' }}>Go to OrderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
