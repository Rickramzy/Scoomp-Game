'use-strict';

const questions = [
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
const instruct = document.querySelector('.instruct');
const questionSection = document.getElementById('question-holder');
const questionLine = document.getElementById('question');
const scoring = document.getElementById('score');
const quiz = document.getElementById('quiz');
const answerColumn = document.getElementById('answer');
let shuffledQuestion, currentQuestionIndex;
let score = 0;

//event listeners for when an event occurs
startButton.addEventListener("click", startGame);
finishButton.addEventListener("click", endGame);
nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    setNextQuestion()
});

function startGame() {
    quiz.classList.add('hide');
    startButton.classList.add('hide');
    finishButton.classList.add('hide');
    questionSection.classList.remove('hide');
    shuffledQuestion = questions.sort(() => Math.random() - 0.6);
    currentQuestionIndex = 0;
    scoring.innerText = "Score: " + score;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    questionLine.innerText = question.question;
    question.answers.forEach((answer) => {
        const button =  document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }button.addEventListener("click", selectAnswer);
        answerColumn.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerColumn.firstChild) {
        answerColumn.removeChild(answerColumn.firstChild);
    }
}

function selectAnswer(element) {
    let selectedButton = element.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerColumn.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    });
    if (shuffledQuestion.length > currentQuestionIndex+1) {
        nextButton.classList.remove("hide");
        instruct.classList.add("hide");
    }
    else {
        finishButton.classList.remove("hide");
    }
    if(correct === "true") {
        scoring.innerText = score += 1;
        scoring.innerText = "Score: "+ "/"+questions.length;
    }
    else {
        scoring.innerText = "Score: "+ "/"+questions.length;
    }
}

// handles the status of a button
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

//
function endGame() {
    finishButton.classList.add("hide");
    questionSection.classList.add("hide");
    scoring.classList.add("hide");
    totalScore = document.createElement("p");
    let end = "Total";
    totalScore.innerText = end;
    totalScore.classList.add("question1");
    quiz.appendChild(totalScore);
    quiz.removeChild(quiz);
}
