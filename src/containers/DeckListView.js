import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import DeckDetail from '../components/DeckDetail';
import PropTypes from 'prop-types';
import {gray, white} from "../../utils/colors";
import {connect} from 'react-redux';
import {setSelectedDeckAction} from '../actions/deckActions';

class DeckListView extends Component {

    static propTypes = {
        deckList: PropTypes.object.isRequired
    };

    static defaultProps = {
        deckList: {}
    };

    renderItem({item}) {
        return (
            <View style={{borderColor: gray, borderBottomWidth: 1, backgroundColor: white}}>
                <DeckDetail title={item.title}
                            cards={item.questions.length}
                            onPress={this.viewDeck.bind(this, item)}
                />
            </View>
        )
    }

    viewDeck(deck) {
        const title = deck.title;
        this.props.setSelectedDeckAction(deck);
        this.props.navigation.navigate('DeckView', {title});
    }

    render() {
        const {deckList} = this.props;
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

function mapStateToProps({decks}) {
    return {
        deckList: decks.deckList
    }
}

export default connect(mapStateToProps, {setSelectedDeckAction})(DeckListView)