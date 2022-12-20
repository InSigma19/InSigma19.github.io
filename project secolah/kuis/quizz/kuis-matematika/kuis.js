const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

    currentQuestionIndex++

    setNextQuestion()

})



function startGame() {

    startButton.classList.add('hide')

    shuffledQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0

    questionContainerElement.classList.remove('hide')

    setNextQuestion()

}



function setNextQuestion() {

    resetState()

    showQuestion(shuffledQuestions[currentQuestionIndex])

}



function showQuestion(question) {

    questionElement.innerText = question.question

    question.answers.forEach(answer => {

        const button = document.createElement('button')

        button.innerText = answer.text

        button.classList.add('btn')

        if (answer.correct) {

            button.dataset.correct = answer.correct

        }

        button.addEventListener('click', selectAnswer)

        answerButtonsElement.appendChild(button)

    })

}



function resetState() {

    clearStatusClass(document.body)

    nextButton.classList.add('hide')

    while (answerButtonsElement.firstChild) {

        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }

}



function selectAnswer(e) {

    const selectedButton = e.target

    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button => {

        setStatusClass(button, button.dataset.correct)

    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {

        nextButton.classList.remove('hide')

    } else {

        startButton.innerText = 'Restart'

        startButton.classList.remove('hide')

    }

}



function setStatusClass(element, correct) {

    clearStatusClass(element)

    if (correct) {

        element.classList.add('correct')

    } else {

        element.classList.add('wrong')

    }

}



function clearStatusClass(element) {

    element.classList.remove('correct')

    element.classList.remove('wrong')

}



const questions = [

    {

        question: 'Turunan dari Sin2x adalah ?',

        answers: [

            { text: '2 Cos2x', correct: true },

            { text: '4 Cos3x', correct: false }

        ]

    },

    {

        question: 'Turunan dari Cos2x + 1 adalah ?',

        answers: [

            { text: '-4 Sin2x', correct: false },

            { text: '-2 Sin2x + 1', correct: false },

            { text: '2 Sin2x', correct: false },

            { text: '-2 Sin2x', correct: true }

        ]

    },

    {

        question: 'Turunan dari 3 Sin5x adalah ?',

        answers: [

            { text: '-15 cos5x', correct: false },

            { text: '15 Cos5x', correct: true },

            { text: ' 15 Sin5x', correct: false },

            { text: '-15 Sin5x', correct: false }

        ]

    },

    {

        question: 'Turunan dari Tanx . Sinx adalah ?',

        answers: [

            { text: '-sec^2x . cosx', correct: false },

            { text: 'sec^2x . cosx', correct: true }

        ]
    },

    {

        question: 'Turunan dari Tan(2x-3) adalah ?',

        answers: [

            { text: '-2 Sec^2(2x-3)', correct: false },

            { text: '2 Sec^2(2x-3)', correct: true }

        ]
    }
]