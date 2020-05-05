import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const TAG = "AppHome";
export default class AppHome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // showBottomPlayBar: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    this._onPressText();
                }}>  生活艹了所有人，没有人可以明哲保身  </Text>
            </View>
        );
    }

    _onPressText() {
        console.log(TAG, "---- _onPressPage");
        this._jumpToLoginPage()
    }

    _jumpToLoginPage() {
        console.log(TAG, "---- _jumpToLoginPage");
        Actions.push("login")
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#2aff38',
		justifyContent: 'center',
        alignItems: 'center'
	},
})