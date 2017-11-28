import React, {Component} from 'react';
import {View, Platform} from 'react-native'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TabNavigator} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DeckListView from './src/containers/DeckListView';
import reducer from './src/reducers';
import {white, orange, blue} from './utils/colors';

const Tabs = TabNavigator({
        DeckList: {
            screen: DeckListView,
            navigatonOptions: {
                tabBarLabel: 'Deck List',
                tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor}/>
            }
        }
    },
    {
        navigatonOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? orange : white,
            indicatorStyle: {
                backgroundColor: blue
            },
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : orange,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });


export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <Tabs/>
                </View>
            </Provider>
        )
    }
}
