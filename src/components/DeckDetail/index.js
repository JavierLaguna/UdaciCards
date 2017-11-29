import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {gray, darkGray} from '../../../utils/colors'

export default class DeckDetail extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.number.isRequired
    };

    static defaultProps = {
        title: 'Deck Title',
        cards: 0
    };

    render() {
        const {cards, title} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{`${cards} cards`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        borderColor: gray,
        borderBottomWidth: 1,
    },
    title: {
        color: darkGray,
        fontSize: 20
    },
    subTitle: {
        color: gray
    }
});