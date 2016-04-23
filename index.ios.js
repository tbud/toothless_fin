"use strict";

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Alert,
  Picker
} from 'react-native';
import {Button, View, Text, Input, Image} from 'toothless';

import scale from 'toothless_scale';

scale.changeTheme('nick');

class toothless_fin extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    buttonText: 'Action',
    showText: 'toothless'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:50, width:50}} onPress={()=> Alert.alert('Hello')}/>
        <Text>{this.state.showText}</Text>
        <Input/>
        <Image style={{width: 50, height: 50}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
        <Button value='确定' onPress={()=> this._handleClick()}/>
      </View>
    )
  }

  _handleClick() {
    this.setState({showText: 'Welcome toothless!'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 250,
    // height: 230,
    // left:0,
    // alignItems: 'center',
    // backgroundColor:'red'
  },
});


AppRegistry.registerComponent('toothless_fin', () => toothless_fin);
