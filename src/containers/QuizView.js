import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {darkGray, gray, green, red, white} from "../../utils/colors";
import {MaterialIcons} from '@expo/vector-icons';
import IconPlatform from '../components/IconPlatform';
import Question from '../components/Question';
import Answer from '../components/Answer';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {
    addFailQuestionAction,
    addHitQuestionAction,
    resetQuizAction,
    setCurrentQuestionQuizAction
} from '../actions/deckActions';

const QUESTION_VIEW = 'question-view';
const ANSWER_VIEW = 'answer-view';
const ANIMATION_DURATION = 400;

class QuizView extends Component {

    static propTypes = {
        selectedDeck: PropTypes.object.isRequired
    };

    static defaultProps = {
        selectedDeck: {}
    };

    state = {
        view: QUESTION_VIEW
    };

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params;

        return {
            title: `Quiz - ${title}`
        }
    };

    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    componentWillMount() {
        this.props.resetQuizAction();
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

    onPressCorrect() {
        this.props.addHitQuestionAction();
        this.goAheadQuestion();
    }

    onPressIncorrect() {
        this.props.addFailQuestionAction();
        this.goAheadQuestion();
    }

    goAheadQuestion() {
        if (this.props.quiz.currentQuestion + 1 === Object.keys(this.props.selectedDeck.questions).length) {
            console.log('end')
        } else {
            this.props.setCurrentQuestionQuizAction(this.props.quiz.currentQuestion + 1);
            this.onFlipPage(QUESTION_VIEW);
        }
    }

    render() {
        const {view} = this.state;
        const {selectedDeck, quiz} = this.props;
        const {questions} = selectedDeck;
        const rotateY = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View behavior='padding' style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>{`${quiz.currentQuestion}/${Object.keys(questions).length}`}</Text>
                        <MaterialIcons name='question-answer' size={25} color={gray}/>
                    </View>
                    <View>
                        <View style={styles.pointsContainer}>
                            <Text style={styles.points}>{quiz.hitQuestions}</Text>
                            <IconPlatform type='Ionicons' name='checkmark-circle' size={20} color={green}/>
                        </View>
                        <View style={styles.pointsContainer}>
                            <Text style={styles.points}>{quiz.failQuestions}</Text>
                            <IconPlatform type='Ionicons' name='close-circle' size={20} color={red}/>
                        </View>
                    </View>
                </View>

                <Animated.View style={[styles.bodyContainer, {transform: [{rotateY}]}]}>
                    {view === QUESTION_VIEW ?
                        <Question title={questions[quiz.currentQuestion].question}
                                  flipPage={this.onFlipPage.bind(this, ANSWER_VIEW)}
                        />
                        : <Answer title={questions[quiz.currentQuestion].answer}
                                  flipPage={this.onFlipPage.bind(this, QUESTION_VIEW)}
                                  onPressCorrect={this.onPressCorrect.bind(this)}
                                  onPressIncorrect={this.onPressIncorrect.bind(this)}
                        />
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

function mapStateToProps({decks}) {
    return {
        selectedDeck: decks.selectedDeck,
        quiz: decks.quiz
    }
}

export default connect(mapStateToProps, {
    resetQuizAction,
    addFailQuestionAction,
    addHitQuestionAction,
    setCurrentQuestionQuizAction
})(QuizView)