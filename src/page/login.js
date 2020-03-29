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
                <Text>Login</Text>
            </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#af6f38'
	},
})