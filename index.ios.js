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
import {Button, View, Text, Input} from 'toothless';

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
    alignItems: 'center'
  }
});


AppRegistry.registerComponent('toothless_fin', () => toothless_fin);
