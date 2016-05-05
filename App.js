"use strict";

import React, {
    Component,
    Button,
    View,
    Text,
    Input,
    Image,
    ScrollView,
    Scale,
    StyleSheet,
} from 'toothless';

Scale.changeTheme('233');

export default class App extends Component {
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
                <ScrollView>
                <View style={{height:50, width:50, backgroundColor:'#ddd'}} onPress={()=> Alert.alert('Hello')}/>
                <Text>{this.state.showText}</Text>

                <Input placeholder="normal input" keyboardType selectTextOnFocus />
                <Input placeholder="disabled input" disabled defaultValue="Disable Input"/>
                <Input placeholder="normal error input" error defaultValue="enter error info"/>
                <Input placeholder="password input" password defaultValue="123"/>
                <Input placeholder="number input" keyboardType="numeric" defaultValue="123"/>
                <Input placeholder="phone input" keyboardType="phone-pad" defaultValue="13913911339"/>
                <Input placeholder="email input" keyboardType="email-address" defaultValue="123@ttt.com"/>
                <Input placeholder="inline input" singleLine keyboardType="email-address"/>
                <Input placeholder="inline disabled input" singleLine disabled keyboardType="email-address"/>
                <Input placeholder="inline error input" singleLine error keyboardType="email-address"  defaultValue="enter error info"/>

                <Image style={{width: 50, height: 50}}
                       source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>

                <Button value='Default' onPress={()=> this._handleClick()}/>
                <Button value='Default Block' block onPress={()=> this._handleClick()}/>
                <Button value='Primary' type="primary" onPress={()=> this._handleClick()}/>
                <Button value='Ghost' type="flat" onPress={()=> this._handleClick()}/>
                <Button value='Default Disabled' disabled onPress={()=> this._handleClick()}/>
                <Button value='Default Block Disabled' disabled block onPress={()=> this._handleClick()}/>
                <Button value='Primary Disabled' disabled type="primary" onPress={()=> this._handleClick()}/>
                <Button value='Ghost Disabled' disabled type="flat" onPress={()=> this._handleClick()}/>
                </ScrollView>
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
        height: 1000,
        // width: 250,
        // height: 230,
        // left:0,
        // alignItems: 'center',
        // backgroundColor:'red'
    },
});