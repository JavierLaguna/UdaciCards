import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {blue, darkGray, gray, orange, white, yellow} from "../../utils/colors";
import IconPlatform from '../components/IconPlatform';

export default class DeckView extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.number.isRequired,
        onPress: PropTypes.func.isRequired
    };

    static defaultProps = {
        author: 'Author',
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
        const {author, title, cards} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.authorContainer}>
                    <Text style={styles.author}>{author}</Text>
                    <FontAwesome name='user' size={25} color={gray}/>
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='cards-playing-outline' size={50} color={blue}/>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{`${cards} cards`}</Text>

                    <View style={styles.starsContainer}>
                        <IconPlatform type='Ionicons' name='star' size={50} color={yellow}/>
                        <IconPlatform type='Ionicons' name='star-outline' size={50} color={gray}/>
                        <IconPlatform type='Ionicons' name='star-outline' size={50} color={gray}/>
                    </View>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.androidSubmitBtn}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.androidSubmitBtn}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
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
        alignItems: 'center'
    },
    title: {
        color: darkGray,
        fontSize: 20
    },
    subTitle: {
        color: gray
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        height: 40
    },
    author: {
        alignItems: 'center',
        marginRight: 5,
        marginTop: 5,
        color: gray
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:40
    },
    btn:{},
    iosSubmitBtn: {
        backgroundColor: orange,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    androidSubmitBtn: {
        backgroundColor: gray,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    }
});