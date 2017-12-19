import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {darkGray, gray, white, yellow} from "../../../utils/colors";
import Button from "../Button";
import IconPlatform from "../IconPlatform";
import {MAX_STARS} from '../../constants/constants';

export default class Question extends Component {
    static propTypes = {
        exit: PropTypes.func.isRequired
    };

    static defaultProps = {
        exit: () => {
        }
    };

    state = {
        votes: 0
    };

    onExit() {
        this.props.exit(this.state.votes);
    }

    setVotes(votes) {
        if (votes > MAX_STARS) {
            votes = MAX_STARS;
        }
        this.setState({votes});
    }

    render() {
        const {votes} = this.state;
        const noStars = MAX_STARS - votes;
        const starsItems = [];
        const noStarsItems = [];

        for (let i = 0; i < votes; i++) {
            starsItems.push(
                <TouchableOpacity key={i + votes}
                                  onPress={this.setVotes.bind(this, ((MAX_STARS - votes === 0 ? 1 : MAX_STARS - votes)) + i)}
                >
                    <IconPlatform type='Ionicons' name='star' size={50} color={yellow}/>
                </TouchableOpacity>
            );
        }

        for (let i = 0; i < noStars; i++) {
            starsItems.push(
                <TouchableOpacity key={i + noStars}
                                  onPress={this.setVotes.bind(this, (MAX_STARS - noStars) + i + 1)}
                >
                    <IconPlatform type='Ionicons' name='star-outline' size={50} color={gray}/>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.container}>
                <IconPlatform type='Ionicons' name='trophy' size={100} color={yellow}/>
                <Text style={styles.title}>You are finished the Quiz! Congratulations!</Text>

                <View style={styles.voteContainer}>
                    <Text style={styles.subTitle}>Vote this deck:</Text>
                    <View style={styles.stars}>
                        {starsItems}
                        {noStarsItems}
                    </View>
                </View>

                <Button onPress={this.onExit.bind(this)}>Exit</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    voteContainer: {
        marginTop: 30,
        marginBottom: 30
    },
    subTitle: {
        fontSize: 15,
        color: darkGray,
        textAlign: 'center'
    },
    stars: {
        flexDirection: 'row'
    }
});