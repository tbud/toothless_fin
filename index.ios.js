/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Alert,
} from 'react-native';
import {Button, View, Text} from 'toothless';

// import View from './kits/view'

import Scale from 'toothless_scale';

var TView = require('toothless').View;

const toothless_fin = React.createClass({
  getInitialState(){
    return {
      buttonText: 'Action',
      showText: 'test text'
    }
  },

  render(){
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.buttonStyle}>
          <Button value='确定'/>
        </View>
        <View>
          <Text>{this.state.showText}</Text>
        </View>
        <TView style={{height:50, width:50}} onPress={()=> Alert.alert('Hello')}/>
      </View>
    )
  },

  _handleClick(){
    this.setState({showText: 'toothless'});
  }
});

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#FF9E08',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 5
  }
});


AppRegistry.registerComponent('toothless_fin', () => toothless_fin);
