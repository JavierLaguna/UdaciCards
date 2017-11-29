import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {blue, darkGray, gray, white} from "../../utils/colors";
import IconPlatform from '../components/IconPlatform';

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

    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck
        }
    };

    render() {
        const {title, cards} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <IconPlatform name='star' size={50} color={blue}/>
                    <MaterialCommunityIcons name='cards-playing-outline' size={50} color={blue}/>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{`${cards} cards`}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60
    },
    title: {
        color: darkGray,
        fontSize: 20
    },
    subTitle: {
        color: gray
    }
});