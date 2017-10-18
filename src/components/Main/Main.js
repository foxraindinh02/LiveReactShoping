import React, { Component } from 'react';
import { Text,View, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text>Main Component</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('Authentication_Screen') }}>
          <Text style={{ color: '#007ACC' }}>Go to Authentication</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => { this.props.navigation.navigate('OrderHistory_Screen') }}>
          <Text style={{ color: '#2D166E' }}>Go to OrderHistory</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => { this.props.navigation.navigate('ChangeInfo_Screen') }}>
          <Text style={{ color: '#F09F00' }}>Go to ChangeInfo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
