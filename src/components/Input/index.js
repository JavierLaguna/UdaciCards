import React, {Component} from 'react'
import {StyleSheet, TextInput} from 'react-native'
import {blue, gray} from "../../../utils/colors";
import PropTypes from 'prop-types'

export default class Input extends Component {
    static propTypes = {
        style: PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        const {style} = this.props;

        return (
            <TextInput {...this.props}
                       placeholderTextColor={gray}
                       selectionColor={blue}
                       underlineColorAndroid={blue}
                       style={[styles.input, style]}
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