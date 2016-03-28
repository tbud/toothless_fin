/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
} from 'react-native';
import Button from './kits/button';
import View from './kits/view'

const toothless_fin = React.createClass({
  getInitialState(){
    return {
      buttonText: 'Action',
      showText: '123'
    }
  },

  render(){
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1, marginTop: 100}}>
          <Button buttonText='toothless' style={styles.buttonStyle} click={this._handleClick}/>
        </View>
        <View>
          <Text>{this.state.showText}</Text>
        </View>
      </View>
    )
  },

  _handleClick(){
    this.setState({showText: 'toothless'})
  }
});

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor: '#FF9E08',
    alignItems:'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 5
  }
});


AppRegistry.registerComponent('toothless_fin', () => toothless_fin);
