import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types'
import {gray} from "../../utils/colors";

export default class DeckView extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.number.isRequired,
        onPress: PropTypes.func.isRequired
    };

    static defaultProps = {
        title: 'Deck Title',
        cards: 0,
        onPress: () => {
        }
    };

    render() {
        const {title} = this.props;

        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}