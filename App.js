import React, {Component} from 'react';
import {View} from 'react-native'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TabNavigator} from 'react-navigation';
import DeckListView from './containers/DeckListView';

const Tabs = TabNavigator({
        DeckList: {
            screen: DeckListView,
            navigatonOptions: {
                tabBarLabel: 'Deck List',
                // tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
            }
        }
    },
    {
        // navigatonOptions: {
        //     header: null
        // },
        // tabBarOptions: {
        //     activeTintColor: Platform.OS === 'ios' ? purple : white,
        //     style: {
        //         height: 56,
        //         backgroundColor: Platform.OS === 'ios' ? white : purple,
        //         shadowColor: 'rgba(0, 0, 0, 0.24)',
        //         shadowOffset: {
        //             width: 0,
        //             height: 3
        //         },
        //         shadowRadius: 6,
        //         shadowOpacity: 1
        //     }
        // }
    });


export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Tabs/>
            </View>
        )
    }
}
