import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class ChangeInfo extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#6DBB42' }}>
        <Text>ChangeInfo Component</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigation.goBack() }}
        >
          <Text>Go Back To Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
