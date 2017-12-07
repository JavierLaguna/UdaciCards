import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import {darkGray} from "../../utils/colors";

export default class QuizView extends Component {
    static navigationOptions = () => {
        return {
            title: 'Quiz - NameDeck'
        }
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>Quiz!</Text>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: darkGray
    }
});