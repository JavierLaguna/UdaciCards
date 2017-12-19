import decksInitialState from './initialState/decksInitialState';
import * as types from '../actions/types';

export default function entries(state = decksInitialState, action) {
    switch (action.type) {
        case types.SET_SELECTED_DECK:
            return {
                ...state,
                selectedDeck: action.selectedDeck
            }
        case types.SET_CURRENT_QUESTION:
            return {
                ...state,
                quiz: {
                    ...state.quiz,
                    currentQuestion: action.currentQuestion
                }
            }
        case types.ADD_FAIL_QUESTION:
            return {
                ...state,
                quiz: {
                    ...state.quiz,
                    failQuestions: state.quiz.failQuestions + 1
                }
            }
        case types.ADD_HIT_QUESTION:
            return {
                ...state,
                quiz: {
                    ...state.quiz,
                    hitQuestions: state.quiz.hitQuestions + 1
                }
            }
        case types.RESET_QUIZ:
            return {
                ...state,
                quiz: {
                    ...decksInitialState.quiz,
                }
            }
        default:
            return state;
    }
}