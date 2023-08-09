'use-strict';
const quizQuestions = [
    {
        question: "What is the capital of Nigeria?",
        answers: [
            {text: 'Enugu', correct: false},
            {text: 'Abakaliki', correct: false},
            {text: 'Abuja', correct: true},
            {text: 'Imo', correct: false},
        ]
    },

        {
            question: "What is the capital of South Africa?",
            answers: [
                {text: 'Togo', correct: false},
                {text: 'Akansas', correct: false},
                {text: 'Free Town', correct: true},
                {text: 'Ghana', correct: false},
            ]
        }, 
    
        {
            question: "What is the first book of the Bible?",
            answers: [
                {text: 'Revelations', correct: false},
                {text: 'Genesis', correct: true},
                {text: 'Esther', correct: false},
                {text: 'Job', correct: false},
            ]
        }, 

        {
            question: "What is the last book of the Bible?",
            answers: [
                {text: 'Revelations', correct: true},
                {text: 'Genesis', correct:false},
                {text: 'Esther', correct: false},
                {text: 'Job', correct: false},
            ]
        }, 

        {
            question: "What is the second book of the Old Testament inthe Bible?",
            answers: [
                {text: 'Exedus', correct: true},
                {text: 'Genesis', correct:false},
                {text: 'Esther', correct: false},
                {text: 'Job', correct: false},
            ]
        }, 

]

//Decalration of variables
const startButton = document.getElementById('start-btn');
const finishButton = document.getElementById('finish-btn');
const nextButton = document.getElementById('next-btn');
const instructP = document.getElementsByClassName('instruct');
const questionSection = document.getElementById('question-holder');
const questionLine = document.getElementById('question');
const scoring = document.getElementById('answer');
const quiz = document.getElementById('quiz');
let shuffledQuestion, currentQuestionIndex;
let score = 0;

//event listeners for when an event occurs
startButton.addEventListener("click", startGame);
finishButton.addEventListener("clic"k, endGame);
nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    setNextQuestion()
});

function startGame() {
    quiz.classList.add('hide');
    startButton.classList.add('hide');
    finishButton.classList.add('hide');
    questionSection.classList.remove('hide');
    shuffledQuestion = questions.sort(()=>Math.random()-0.6);
    currentQuestionIndex = 0;
    scoring.innerText = "Score: " + score;
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

