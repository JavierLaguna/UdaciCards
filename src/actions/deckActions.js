import * as types from './types';

export function setSelectedDeckAction(selectedDeck) {
    return {
        type: types.SET_SELECTED_DECK,
        selectedDeck
    }
}