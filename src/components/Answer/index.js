import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import TextButton from '../TextButton';

export default class Answer extends Component {
    static propTypes = {
        flipPage: PropTypes.func.isRequired,
        title: PropTypes.string.isReplace
    };

    static defaultProps = {
        flipPage: () => {
        },
        title: 'Answer title'
    };

    render() {
        const {flipPage, title} = this.props;

        return (
            <View style={styles.btnContainer}>
                <Text style={styles.title}>{title}</Text>
                <TextButton onPress={flipPage}>Question</TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});