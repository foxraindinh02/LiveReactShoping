import React, { Component } from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F09F00' }}>
        <Text>Authentication Component</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigation.goBack() }}
        >
          <Text>Go Back To Main</Text>
        </TouchableOpacity>
        <Text>{this.props.navigation.state.params.param}</Text>
      </View>
    );
  }
}
