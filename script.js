const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of Js?",
        a: "Java Script",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const startButton = document.querySelector("#start");
const submitButton = document.querySelector("#submit");
const nextButton = document.querySelector("#next");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const timerDisplay = document.querySelector('#timer');

let questionCount = -1;
let score = 0;

let timeLeft = 60; // Time in seconds

let timerInterval;

function startTimer() {
    timerDisplay.textContent = `${timeLeft} seconds`;
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            timeLeft = 0; 
        }
        timerDisplay.textContent = `${timeLeft} seconds`;

        if (timeLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

nextButton.style.display = 'none';
submitButton.style.display = 'none';


// Load Question function 
const loadQuestion = () => {
    questionCount++;
    if (questionCount < quizDB.length) {
        const questionList = quizDB[questionCount];
        question.innerHTML = questionList.question;
        option1.innerHTML = questionList.a;
        option2.innerHTML = questionList.b;
        option3.innerHTML = questionList.c;
        option4.innerHTML = questionList.d;
    } else {
        endQuiz();
    }
};

// Start Quiz
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    nextButton.style.display = 'block';
    loadQuestion();
    startTimer();
});

// Next button click event
nextButton.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();

    if (checkedAnswer !== undefined) {
        const correctAnswer = quizDB[questionCount].ans;
        if (checkedAnswer === correctAnswer) {
            score++;
        }
    }

    loadQuestion();
    deselectAll();
    if (questionCount === quizDB.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    }
});

// Submit button click event
submitButton.addEventListener('click', () => {
    endQuiz();
});

// Function to end the quiz
function endQuiz() {
    question.style.display = 'none';
    option1.style.display = 'none';
    option2.style.display = 'none';
    option3.style.display = 'none';
    option4.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';

    showScore.innerHTML = `
        <h3>Your Score: ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
    showScore.style.display = 'block';
}

// Checked answer function
const getCheckedAnswer = () => {
    let answer;
    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

// Deselect all answers
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};
