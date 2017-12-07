import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {blue, darkGray, gray, white, yellow} from "../../utils/colors";
import IconPlatform from '../components/IconPlatform';
import Button from '../components/Button';

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

    addCard() {
        this.props.navigation.navigate('AddCardView');
    }

    startQuiz() {
        this.props.navigation.navigate('QuizView');
    }

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
                    <Button onPress={this.addCard.bind(this)} style={styles.addButton} textStyle={{color: blue}}>
                        Add Card
                    </Button>

                    <Button onPress={this.startQuiz.bind(this)}>
                        Start Quiz
                    </Button>
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
        marginBottom: 40
    },
    addButton: {
        backgroundColor: white,
        borderColor: blue,
        borderWidth: 2
    }
});