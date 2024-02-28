
const questionObj = {
    html:{
        Q1: {
            question: "Q1: What is the full form of HTML?",
            a: "Hello To My Land",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans4"
        },
        Q2: {
            question: "Q2: Which tag is used to define an unordered list in HTML?",
            a: "<ul>",
            b: "<ol>",
            c: "<li>",
            d: "<list>",
            ans: "ans1"
        },
        Q3: {
            question: "Q3: What does HTML stand for?",
            a: "Hyperlink Text Markup Language",
            b: "Hyper Transfer Markup Language",
            c: "Hypertext Markup Language",
            d: "High Text Markup Language",
            ans: "ans3"
        },
        Q4: {
            question: "Q4: Which tag is used to define a hyperlink in HTML?",
            a: "<a>",
            b: "<link>",
            c: "<href>",
            d: "<hyper>",
            ans: "ans1"
        },
        Q5: {
            question: "Q5: What does the HTML element <div> stand for?",
            a: "Division",
            b: "Display",
            c: "Document",
            d: "Declaration",
            ans: "ans1"
        },
        Q6: {
            question: "Q6: Which attribute is used to provide additional information about an element in HTML?",
            a: "class",
            b: "id",
            c: "href",
            d: "src",
            ans: "ans1"
        },
        Q7: {
            question: "Q7: What is the correct way to comment out multiple lines in HTML?",
            a: "<!-- This is a comment -->",
            b: "/* This is a comment */",
            c: "// This is a comment",
            d: "<! This is a comment !>",
            ans: "ans1"
        },
        Q8: {
            question: "Q8: Which of the following is not a semantic HTML element?",
            a: "<header>",
            b: "<div>",
            c: "<nav>",
            d: "<footer>",
            ans: "ans2"
        },
        Q9: {
            question: "Q9: What is the purpose of the HTML <meta> tag?",
            a: "To define metadata about an HTML document",
            b: "To create a clickable button",
            c: "To insert a video",
            d: "To define a navigation menu",
            ans: "ans1"
        },
        Q10: {
            question: "Q10: Which HTML tag is used to specify an inline frame?",
            a: "<frame>",
            b: "<iframe>",
            c: "<inline>",
            d: "<frame>",
            ans: "ans2"
        },
        Q11: {
            question: "Q11: What is the correct HTML for creating a hyperlink?",
            a: "<a href='http://www.example.com'>Example</a>",
            b: "<link src='http://www.example.com'>Example</link>",
            c: "<href='http://www.example.com'>Example</href>",
            d: "<a src='http://www.example.com'>Example</a>",
            ans: "ans1"
        },
        Q12: {
            question: "Q12: Which tag is used to define a table row in HTML?",
            a: "<tr>",
            b: "<table>",
            c: "<td>",
            d: "<th>",
            ans: "ans1"
        },
        Q13: {
            question: "Q13: What is the correct HTML for inserting an image?",
            a: "<img src='image.jpg' alt='MyImage'>",
            b: "<image src='image.jpg' alt='MyImage'>",
            c: "<img alt='MyImage'>image.jpg</img>",
            d: "<img='image.jpg' alt='MyImage'>",
            ans: "ans1"
        },
        Q14: {
            question: "Q14: Which of the following tags represents emphasized text in HTML?",
            a: "<italic>",
            b: "<strong>",
            c: "<em>",
            d: "<highlight>",
            ans: "ans3"
        },
        Q15: {
            question: "Q15: Which of the following is an HTML5 semantic element?",
            a: "<article>",
            b: "<section>",
            c: "<division>",
            d: "<content>",
            ans: "ans1"
        },
        Q16: {
            question: "Q16: What does the HTML element <br> stand for?",
            a: "Break",
            b: "Begin",
            c: "Bold",
            d: "Burst",
            ans: "ans1"
        },
        Q17: {
            question: "Q17: Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
            a: "src",
            b: "alt",
            c: "title",
            d: "href",
            ans: "ans2"
        },
        Q18: {
            question: "Q18: What is the correct HTML for creating a hyperlink to another webpage?",
            a: "<a href='http://www.example.com'>Click here</a>",
            b: "<a src='http://www.example.com'>Click here</a>",
            c: "<link href='http://www.example.com'>Click here</link>",
            d: "<link src='http://www.example.com'>Click here</link>",
            ans: "ans1"
        },
        Q19: {
            question: "Q19: Which HTML tag is used to define a paragraph?",
            a: "<para>",
            b: "<p>",
            c: "<paragraph>",
            d: "<line>",
            ans: "ans2"
        },
        Q20: {
            question: "Q20: What is the correct HTML for creating a checkbox?",
            a: "<input type='checkbox'>",
            b: "<checkbox>",
            c: "<check>",
            d: "<input checkbox>",
            ans: "ans1"
        }
    }
};


const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
];


const joinButton = document.querySelector('#join');


joinButton.addEventListener('click', function() {
   
    for( let key in questionObj.html){
        // console.log(questionObj.html[key])
        const question = questionObj.html[key]

        quizDB.push(question);

    }
    
    // Optionally, you can log the updated quizDB array to see the added questions
    console.log(quizDB);
});


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
const timerH4 = document.getElementsByClassName("time");

let questionCount = -1;
let score = 0;

let timeLeft = 1500; // Time in seconds

let timerInterval;

function startTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            timeLeft = 0; // Ensure the time left is not negative
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
