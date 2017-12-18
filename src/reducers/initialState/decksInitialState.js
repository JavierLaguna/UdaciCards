export default {
    deckList: {
        React: {
            author: 'Homer',
            title: 'React',
            votes: [1, 3, 2, 3, 2, 3, 3, 3],
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            author: 'Toad',
            title: 'JavaScript',
            votes: [],
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    },
    selectedDeck: {},
    quiz: {
        currentQuestion: 0,
        failQuestions: 0,
        hitQuestions: 0,
    }
}