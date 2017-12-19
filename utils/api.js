import {AsyncStorage} from 'react-native';

export const CARDS_STORAGE_KEY = 'UdaciCards:deckList'

export function fetchCalendarResults() {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then(formatCalendarResults)
}

export function submitEntry({entry, key}) {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({[key]: entry}));
}
