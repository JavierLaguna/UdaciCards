import React, {Component} from 'react';
import {View} from 'react-native'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MainView from './src/containers/MainView';
import CardsStatusBar from './src/components/CardsStatusBar';
import reducer from './src/reducers';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <CardsStatusBar/>
                    <MainView/>
                </View>
            </Provider>
        )
    }
}
