import decksInitialState from './initialState/decksInitialState';
import * as types from '../actions/types';

export default function entries(state = decksInitialState, action) {
    switch (action.type) {
        case types.SET_SELECTED_DECK:
            return {
                ...state,
                selectedDeck: action.selectedDeck
            }
        default:
            return state;
    }
}