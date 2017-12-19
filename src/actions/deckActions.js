import * as types from './types';

export function setSelectedDeckAction(selectedDeck) {
    return {
        type: types.SET_SELECTED_DECK,
        selectedDeck
    }
}

export function setCurrentQuestionQuizAction(currentQuestion) {
    return {
        type: types.SET_CURRENT_QUESTION,
        currentQuestion
    }
}

export function addFailQuestionAction() {
    return {
        type: types.ADD_FAIL_QUESTION
    }
}

export function addHitQuestionAction() {
    return {
        type: types.ADD_HIT_QUESTION
    }
}

export function resetQuizAction() {
    return {
        type: types.RESET_QUIZ
    }
}

export function addVoteToDeckAction(vote, deckId) {
    return {
        type: types.ADD_VOTE_TO_DECK,
        vote,
        deckId
    }
}

export function createDeckAction(deck) {
    return {
        type: types.CREATE_DECK,
        deck,
    }
}