import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {darkGray, gray, green, white, red} from "../../utils/colors";
import {MaterialIcons} from '@expo/vector-icons';
import IconPlatform from '../components/IconPlatform';

export default class QuizView extends Component {
    static navigationOptions = () => {
        return {
            title: 'Quiz - NameDeck'
        }
    };

    render() {
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

                <Text style={styles.title}>Quiz!</Text>
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
    }
});