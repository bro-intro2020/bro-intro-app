import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // showBottomPlayBar: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>谁来了？ 谁来了？</Text>
                <Text>我来了！ 我来了！</Text>
            </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#af6f38',
		justifyContent: 'center',
        alignItems: 'center'
	},
})