const quizDB = [
    {
        question: "What is the correct HTML tag for creating a hyperlink?",
        a: "&lt;a&gt;",
        b: "&lt;link&gt;",
        c: "&lt;href&gt;",
        d: "&lt;url&gt;",
        ans: "a"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "color",
        b: "font-color",
        c: "text-color",
        d: "foreground-color",
        ans: "a"
    },
    {
        question: "What does the 'NaN' acronym stand for in JavaScript?",
        a: "Not a Name",
        b: "New Assignment",
        c: "Not a Number",
        d: "No Argument Needed",
        ans: "c"
    },
    {
        question: "Which HTML tag is used for creating an unordered list?",
        a: "&lt;ul&gt;",
        b: "&lt;li&gt;",
        c: "&lt;ol&gt;",
        d: "&lt;dl&gt;",
        ans: "a"
    },
    {
        question: "What is the purpose of 'console.log()' in JavaScript?",
        a: "To display a message to the user",
        b: "To log errors to the console",
        c: "To print the output to the web page",
        d: "To log information to the console for debugging",
        ans: "d"
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        a: "background-color",
        b: "color",
        c: "text-background",
        d: "bgcolor",
        ans: "a"
    },
    {
        question: "What does the 'typeof' operator in JavaScript return for an array?",
        a: "object",
        b: "array",
        c: "type",
        d: "undefined",
        ans: "a"
    },
    {
        question: "Which HTML tag is used for creating a table?",
        a: "&lt;table&gt;",
        b: "&lt;tab&gt;",
        c: "&lt;tr&gt;",
        d: "&lt;td&gt;",
        ans: "a"
    },
    {
        question: "What is the correct way to comment out multiple lines of CSS?",
        a: "// This is a comment //",
        b: "/* This is a comment */",
        c: "&lt;!-- This is a comment --&gt;",
        d: "# This is a comment #",
        ans: "b"
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        a: "new",
        b: "declare",
        c: "var",
        d: "variable",
        ans: "c"
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        a: "static",
        b: "relative",
        c: "fixed",
        d: "absolute",
        ans: "a"
    },
    {
        question: "What is the purpose of 'localStorage' in JavaScript?",
        a: "To store data on the server",
        b: "To store data in a cookie",
        c: "To store data on the client's device",
        d: "To store data in a database",
        ans: "c"
    },
    {
        question: "Which event in JavaScript is triggered when a form is submitted?",
        a: "onFormSubmit",
        b: "onSubmit",
        c: "onClick",
        d: "onChange",
        ans: "b"
    },
    {
        question: "What does the CSS property 'display: none;' do?",
        a: "Hides the element",
        b: "Makes the element visible",
        c: "Resizes the element",
        d: "Changes the text color",
        ans: "a"
    },
    {
        question: "Which JavaScript operator is used for strict equality (both value and type)?",
        a: "==",
        b: "===",
        c: "!=",
        d: "!==",
        ans: "b"
    },
    {
        question: "In CSS, how do you select all elements with the class 'example'?",
        a: ".example",
        b: "#example",
        c: "element.example",
        d: "example",
        ans: "a"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
        a: "To add an event listener to an element",
        b: "To remove an event listener from an element",
        c: "To change the document's title",
        d: "To add an element to the DOM",
        ans: "a"
    },
    {
        question: "Which HTML tag is used for creating a line break?",
        a: "&lt;br&gt;",
        b: "&lt;lb&gt;",
        c: "&lt;break&gt;",
        d: "&lt;newline&gt;",
        ans: "a"
    },
    {
        question: "What is the purpose of 'this' keyword in JavaScript?",
        a: "To refer to the current object",
        b: "To declare a new variable",
        c: "To create a new function",
        d: "To define a new class",
        ans: "a"
    },
    {
        question: "Which CSS property is used to control the space between elements?",
        a: "margin",
        b: "padding",
        c: "border",
        d: "height",
        ans: "a"
    },
    {
        question: "What is the correct JavaScript syntax for a 'for' loop?",
        a: "for (i <= 5)",
        b: "for (i = 1 to 5)",
        c: "for (var i = 1; i <= 5; i++)",
        d: "for i in range(5)",
        ans: "c"
    },
    {
        question: "Which CSS property is used to change the font size of an element?",
        a: "font-style",
        b: "font-family",
        c: "font-size",
        d: "font-weight",
        ans: "c"
    },
    {
        question: "In JavaScript, which method is used to parse JSON data?",
        a: "parseJSON()",
        b: "JSON.parse()",
        c: "fromJSON()",
        d: "stringifyJSON()",
        ans: "b"
    },
    {
        question: "Which HTML tag is used for creating a definition list?",
        a: "&lt;ul&gt;",
        b: "&lt;li&gt;",
        c: "&lt;ol&gt;",
        d: "&lt;dl&gt;",
        ans: "d"
    },
    {
        question: "What does the 'NaN' acronym stand for in JavaScript?",
        a: "Not a Name",
        b: "New Assignment",
        c: "Not a Number",
        d: "No Argument Needed",
        ans: "c"
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

let timeLeft = 1500; // Time in seconds

let timerInterval;

function startTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            timeLeft = 0;
        }

        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
