import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import DeckDetail from '../components/DeckDetail';
import {gray, white} from "../../utils/colors";

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

    renderItem({item}) {
        return (
            <View style={{borderColor: gray, borderBottomWidth: 1, backgroundColor: white}}>
                <DeckDetail title={item.title}
                            cards={item.questions.length}
                            onPress={this.viewDeck.bind(this, item.title)}
                />
            </View>
        )
    }

    viewDeck(deck) {
        this.props.navigation.navigate('DeckView', {deck})
    }

    render() {
        const {deckList} = this.state;
        const arrayList = Object.keys(deckList).map((key, index) => ({...deckList[key], key: index}));

        return (
            <View>
                <FlatList data={arrayList}
                          renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}