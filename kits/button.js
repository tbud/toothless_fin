'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

const Button = React.createClass({
  getDefaultProps(){
    return {
      buttonText: '123',
      click: () => {}
    }
  },

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.buttonStyle, this.props.style]}>
          <TouchableOpacity onPress={this.props.click}>
            <Text>{this.props.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  },

  _onPressButton(){
    console.log('hello world');
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyle:{
    backgroundColor: 'green',
  }
});

export default Button;
