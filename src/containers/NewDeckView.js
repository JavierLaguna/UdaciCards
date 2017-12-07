import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {blue, darkGray} from "../../utils/colors";
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import Button from '../components/Button';
import Input from '../components/Input';

export default class NewDeckView extends Component {

    state = {
        deckTitle: '',
        author: ''
    };

    changeInput(field, e) {
        this.setState({
            [field]: e.nativeEvent.text
        });
    }

    onSubmit() {
        this.props.navigation.navigate('AddCardView');
        this.setState({
            deckTitle: '',
            author: ''
        });
    }

    render() {
        const {author, deckTitle} = this.state;
        let disabledButton = author === '' || deckTitle === '';

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>Create a new deck!</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons style={styles.icon}
                                            name='cards-playing-outline'
                                            size={50}
                                            color={blue}
                    />
                    <Input value={deckTitle}
                           onChange={this.changeInput.bind(this, 'deckTitle')}
                           placeholder='New deck name'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome style={styles.icon}
                                 name='user'
                                 size={44}
                                 color={blue}
                    />
                    <Input value={author}
                           onChange={this.changeInput.bind(this, 'author')}
                           placeholder='Deck author'
                    />
                </View>
                <Button disabled={disabledButton}
                        onPress={this.onSubmit.bind(this)}>
                    Submit
                </Button>
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