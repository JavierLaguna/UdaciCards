import React, {Component} from 'react';
import {View} from 'react-native'
import DeckListView from './containers/DeckListView';

export default class App extends Component {
    render() {
        return (
            <View>
                <DeckListView/>
            </View>
        )
    }
}
