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

        question: 'Ada sebuah Kotak berada pada bidang datar, memiliki massa 20kg, berapa gaya yang diperlukan untuk mendorong  kotak agar bergerak ? (koofisien gesek = 2N)',

        answers: [

            { text: '> 400N', correct: true },

            { text: '< 400N', correct: false }

        ]

    },

    {

        question: 'Ada sebuah kotak berada pada bidang datar, memiliki berat 2N, berapa gaya yang diperlukan agar kotak bergerak ? (koofisien gesek = 4N)',

        answers: [

            { text: '4N', correct: false },

            { text: '8N', correct: false },

            { text: '7N', correct: false },

            { text: '9N', correct: true }

        ]

    },

    {

        question: 'Ada sebuah kotak tepat akan bergerak dengan massa 2kg, besar gaya Gaya gesek 40N maka berapa koofisien yang dialami benda tersebut ?',

        answers: [

            { text: '3N', correct: false },

            { text: '2N', correct: true },

            { text: ' 1N', correct: false },

            { text: '6N', correct: false }

        ]

    },

    {

        question: 'sebuah benda diletakkan secara vertikal dengan berat 20N dengan ketinggian 20 meter, jika permukaan benda licin maka berapa besar gaya Normal yang terjadi pada benda tersebut ?',

        answers: [

            { text: '1N', correct: false },

            { text: '0', correct: true }

        ]
    },

    {

        question: 'Ada sebuah kotak yang berada pada bidang miring dengan sudut kemiringan 60 derajat, kotak tersebut memiliki massa 2kg, berapakah besar gaya Normal yang dialami kotak ?',

        answers: [

            { text: '9N', correct: false },

            { text: '10N', correct: true }

        ]
    }
]