import React, {Component} from 'react';
import {Platform, View} from 'react-native'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DeckListView from './src/containers/DeckListView';
import NewDeckView from './src/containers/NewDeckView';
import DeckView from './src/containers/DeckView';
import AddCardView from './src/containers/AddCardView';
import CardsStatusBar from './src/components/CardsStatusBar';
import IconPlatform from './src/components/IconPlatform';
import reducer from './src/reducers';
import {blue, orange, white} from './utils/colors';

const Tabs = TabNavigator({
        Decks: {
            screen: DeckListView,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor}/>
            }
        },
        NewDeck: {
            screen: NewDeckView,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <IconPlatform type='Ionicons'
                                                           name='add'
                                                           size={30}
                                                           color={tintColor}/>
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            // showIcon: true,
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

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            headerStyle: {
                height: 0
            }
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: orange
            }
        }
    },
    AddCardView: {
        screen: AddCardView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: orange
            }
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <CardsStatusBar/>
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}
