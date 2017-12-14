import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {darkGray, gray, green, white, red} from "../../utils/colors";
import {MaterialIcons} from '@expo/vector-icons';
import IconPlatform from '../components/IconPlatform';
import Question from '../components/Question';
import Answer from '../components/Answer';

const QUESTION_VIEW = 'question-view';
const ANSWER_VIEW = 'answer-view';
const ANIMATION_DURATION = 400;

export default class QuizView extends Component {

    state = {
        view: QUESTION_VIEW
    };

    static navigationOptions = () => {
        return {
            title: 'Quiz - NameDeck'
        }
    };

    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: ANIMATION_DURATION,
                easing: Easing.linear
            }
        ).start()
    }

    onFlipPage(page) {
        this.animate();
        setTimeout(() => {
            this.setState({view: page});
        }, ANIMATION_DURATION - 150);
    }

    render() {
        const {view} = this.state;
        const rotateY = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View behavior='padding' style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>{'1/1'}</Text>
                        <MaterialIcons name='question-answer' size={25} color={gray}/>
                    </View>
                    <View>
                        <View style={styles.pointsContainer}>
                            <Text style={styles.points}>1</Text>
                            <IconPlatform type='Ionicons' name='checkmark-circle' size={20} color={green}/>
                        </View>
                        <View style={styles.pointsContainer}>
                            <Text style={styles.points}>0</Text>
                            <IconPlatform type='Ionicons' name='close-circle' size={20} color={red}/>
                        </View>
                    </View>
                </View>

                <Animated.View style={[styles.bodyContainer, {transform: [{rotateY}]}]}>
                    {view === QUESTION_VIEW ?
                        <Question flipPage={this.onFlipPage.bind(this, ANSWER_VIEW)}/>
                        : <Answer flipPage={this.onFlipPage.bind(this, QUESTION_VIEW)}/>
                    }
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    title: {
        fontSize: 20,
        color: darkGray
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: 45
    },
    number: {
        alignItems: 'center',
        marginRight: 5,
        marginTop: 2,
        color: darkGray
    },
    numberContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    pointsContainer: {
        flexDirection: 'row'
    },
    points: {
        marginRight: 5,
        marginTop: 1,
        color: darkGray
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});