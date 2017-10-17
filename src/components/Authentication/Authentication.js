import React, { Component } from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Authentication Component</Text>
        <TouchableOpacity style={{backgroundColor: 'green'}}
          onPress={() => { this.props.navigation.goBack() }}
        >
          <Text style={{ color: '#fff', fontSize: 20, padding: 10}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
