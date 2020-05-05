import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


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
                <Text>  生活艹了所有人，没有人可以明哲保身</Text>
            </View>
        );
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