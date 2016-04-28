"use strict";

import React, {
    Component,
    Button,
    View,
    Text,
    Input,
    Image,

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
                <View style={{height:50, width:50, backgroundColor:'#ddd'}} onPress={()=> Alert.alert('Hello')}/>
                <Text>{this.state.showText}</Text>
                <Input placeholder="这是没有输入的时候显示的默认文字"/>
                <Image style={{width: 50, height: 50}}
                       source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                <Button value='普通按钮' onPress={()=> this._handleClick()}/>
                <Button value='普通按钮 Block' block="true" onPress={()=> this._handleClick()}/>
                <Button value='幽灵按钮' flat="true" onPress={()=> this._handleClick()}/>
                <Button value='不能点击' disabled="true" onPress={()=> this._handleClick()}/>
                <Button value='不可点的幽灵按钮' flat="true" disabled="true" onPress={()=> this._handleClick()}/>
                <Button value='不可点的普通按钮 Block' block="true" disabled="true" onPress={()=> this._handleClick()}/>


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