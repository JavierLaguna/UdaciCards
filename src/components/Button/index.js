import React, {Component} from 'react'
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import {blue, white} from "../../../utils/colors";

export default class Button extends Component {
    static propTypes = {
        style: PropTypes.object,
        children: PropTypes.string.isRequired
    };

    static defaultProps = {
        style: {},
        children: ''
    };

    render() {
        const {style, children} = this.props;

        return (
            <TouchableOpacity {...this.props}
                              style={[styles.btn, Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, style]}
            >
                <Text style={styles.text}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: blue,
        padding: 10,
        height: 45
    },
    androidSubmitBtn: {
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iosSubmitBtn: {
        borderRadius: 7,
        marginLeft: 40,
        marginRight: 40
    },
    text: {
        color: white
    }
});