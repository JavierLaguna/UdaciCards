import React, {Component} from 'react'
import {StyleSheet, TextInput} from 'react-native'
import {blue, gray} from "../../../utils/colors";

export default class Input extends Component {
    render() {
        return (
            <TextInput {...this.props}
                       placeholderTextColor={gray}
                       selectionColor={blue}
                       underlineColorAndroid={blue}
                       style={styles.input}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 40,
        margin: 20,
        padding: 8
    }
});