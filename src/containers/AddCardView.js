import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {blue, darkGray} from "../../utils/colors";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import Button from '../components/Button';
import Input from '../components/Input';

export default class AddCardView extends Component {
    state = {
        answer: '',
        question: ''
    };

    static navigationOptions = () => {
        return {
            title: 'Add Card'
        }
    };

    changeInput(field, e) {
        this.setState({
            [field]: e.nativeEvent.text
        });
    }

    render() {
        const {answer, question} = this.state;
        let disabledButton = answer === '' || question === '';

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>New Card</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome style={styles.icon}
                                            name='question-circle'
                                            size={50}
                                            color={blue}
                    />
                    <Input value={question}
                           onChange={this.changeInput.bind(this, 'question')}
                           placeholder='Question'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon}
                                 name='question-answer'
                                 size={50}
                                 color={blue}
                    />
                    <Input value={answer}
                           onChange={this.changeInput.bind(this, 'answer')}
                           placeholder='Answer'
                    />
                </View>
                <Button disabled={disabledButton}>Submit</Button>
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
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        marginTop: 15
    }
});