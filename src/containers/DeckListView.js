import React, {Component} from 'react';
import {View} from 'react-native';
import DeckDetail from '../components/DeckDetail';
import {gray} from "../../utils/colors";

export default class DeckListView extends Component {

    state = {
        deckList: {
            React: {
                title: 'React',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces'
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event'
                    }
                ]
            },
            JavaScript: {
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            }
        }
    };

    render() {
        const {deckList} = this.state;
        return (
            <View>
                {Object.keys(deckList).map((key, index) => (
                    <View key={index} style={{borderColor: gray, borderBottomWidth: 1}}>
                        <DeckDetail title={deckList[key].title}
                                    cards={deckList[key].questions.length}/>
                    </View>
                ))}
            </View>
        )
    }
}