const questionObj = {
    html:{
        Q1: {
            question: "Q1: What is the full form of HTML?",
            a: "Hello To My Land",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "c"
        },
        Q2: {
            question: "Q2: Which tag is used to define an unordered list in HTML?",
            a: "&lt;ul&gt;",
            b: "&lt;ol&gt;",
            c: "&lt;li&gt;",
            d: "&lt;list&gt;",
            ans: "a"
        },
        Q3: {
            question: "Q3: What does HTML stand for?",
            a: "Hyperlink Text Markup Language",
            b: "Hyper Transfer Markup Language",
            c: "Hypertext Markup Language",
            d: "High Text Markup Language",
            ans: "c"
        },
        Q4: {
            question: "Q4: Which tag is used to define a hyperlink in HTML?",
            a: "&lt;a&gt;",
            b: "&lt;link&gt;",
            c: "&lt;href&gt;",
            d: "&lt;hyper&gt;",
            ans: "a"
        },
        Q5: {
            question: "Q5: What does the HTML element &lt;div&gt; stand for?",
            a: "Division",
            b: "Display",
            c: "Document",
            d: "Declaration",
            ans: "a"
        },
        Q6: {
            question: "Q6: Which attribute is used to provide additional information about an element in HTML?",
            a: "class",
            b: "id",
            c: "href",
            d: "src",
            ans: "a"
        },
        Q7: {
            question: "Q7: What is the correct way to comment out multiple lines in HTML?",
            a: "&lt;!-- This is a comment --&gt;",
            b: "/* This is a comment */",
            c: "// This is a comment",
            d: "&lt;! This is a comment !&gt;",
            ans: "a"
        },
        Q8: {
            question: "Q8: Which of the following is not a semantic HTML element?",
            a: "&lt;header&gt;",
            b: "&lt;div&gt;",
            c: "&lt;nav&gt;",
            d: "&lt;footer&gt;",
            ans: "b"
        },
        Q9: {
            question: "Q9: What is the purpose of the HTML &lt;meta&gt; tag?",
            a: "To define metadata about an HTML document",
            b: "To create a clickable button",
            c: "To insert a video",
            d: "To define a navigation menu",
            ans: "a"
        },
        Q10: {
            question: "Q10: Which HTML tag is used to specify an inline frame?",
            a: "&lt;frame&gt;",
            b: "&lt;iframe&gt;",
            c: "&lt;inline&gt;",
            d: "&lt;frame&gt;",
            ans: "b"
        },
        Q11: {
            question: "Q11: What is the correct HTML for creating a hyperlink?",
            a: "&lt;a href='http://www.example.com'&gt;Example&lt;/a&gt;",
            b: "&lt;link src='http://www.example.com'&gt;Example&lt;/link&gt;",
            c: "&lt;href='http://www.example.com'&gt;Example&lt;/href&gt;",
            d: "&lt;a src='http://www.example.com'&gt;Example&lt;/a&gt;",
            ans: "a"
        },
        Q12: {
            question: "Q12: Which tag is used to define a table row in HTML?",
            a: "&lt;tr&gt;",
            b: "&lt;table&gt;",
            c: "&lt;td&gt;",
            d: "&lt;th&gt;",
            ans: "a"
        },
        Q13: {
            question: "Q13: What is the correct HTML for inserting an image?",
            a: "&lt;img src='image.jpg' alt='MyImage'&gt;",
            b: "&lt;image src='image.jpg' alt='MyImage'&gt;",
            c: "&lt;img alt='MyImage'&gt;image.jpg&lt;/img&gt;",
            d: "&lt;img='image.jpg' alt='MyImage'&gt;",
            ans: "a"
        },
        Q14: {
            question: "Q14: Which of the following tags represents emphasized text in HTML?",
            a: "&lt;italic&gt;",
            b: "&lt;strong&gt;",
            c: "&lt;em&gt;",
            d: "&lt;highlight&gt;",
            ans: "c"
        },
        Q15: {
            question: "Q15: Which of the following is an HTML5 semantic element?",
            a: "&lt;article&gt;",
            b: "&lt;section&gt;",
            c: "&lt;division&gt;",
            d: "&lt;content&gt;",
            ans: "a"
        },
        Q16: {
            question: "Q16: What does the HTML element &lt;br&gt; stand for?",
            a: "Break",
            b: "Begin",
            c: "Bold",
            d: "Burst",
            ans: "a"
        },
        Q17: {
            question: "Q17: Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
            a: "src",
            b: "alt",
            c: "title",
            d: "href",
            ans: "b"
        },
        Q18: {
            question: "Q18: What is the correct HTML for creating a hyperlink to another webpage?",
            a: "&lt;a href='http://www.example.com'&gt;Click here&lt;/a&gt;",
            b: "&lt;a src='http://www.example.com'&gt;Click here&lt;/a&gt;",
            c: "&lt;link href='http://www.example.com'&gt;Click here&lt;/link&gt;",
            d: "&lt;link src='http://www.example.com'&gt;Click here&lt;/link&gt;",
            ans: "a"
        },
        Q19: {
            question: "Q19: Which HTML tag is used to define a paragraph?",
            a: "&lt;para&gt;",
            b: "&lt;p&gt;",
            c: "&lt;paragraph&gt;",
            d: "&lt;line&gt;",
            ans: "b"
        },
        Q20: {
            question: "Q20: What is the correct HTML for creating a checkbox?",
            a: "&lt;input type='checkbox'&gt;",
            b: "&lt;checkbox&gt;",
            c: "&lt;check&gt;",
            d: "&lt;input checkbox&gt;",
            ans: "a"
        }
    },
    css:{
        Q1: {
            question: "Q1: What does CSS stand for?",
            a: "Cascading Style Sheets",
            b: "Creative Style Sheets",
            c: "Computer Style Sheets",
            d: "Colorful Style Sheets",
            ans: "ans1"
        },
        Q2: {
            question: "Q2: Which CSS property is used to change the text color of an element?",
            a: "color",
            b: "text-color",
            c: "font-color",
            d: "foreground-color",
            ans: "a"
        },
        Q3: {
            question: "Q3: Which CSS property is used to change the background color of an element?",
            a: "bgcolor",
            b: "background-color",
            c: "color",
            d: "background",
            ans: "b"
        },
        Q4: {
            question: "Q4: Which CSS property is used to set the text formatting to italic?",
            a: "font-style",
            b: "text-style",
            c: "italic",
            d: "font-italic",
            ans: "a"
        },
        Q5: {
            question: "Q5: Which CSS property is used to create rounded corners on an element?",
            a: "border-radius",
            b: "rounded-corners",
            c: "corner-radius",
            d: "border-style",
            ans: "a"
        },
        Q6: {
            question: "Q6: Which CSS property is used to add shadows to text?",
            a: "text-shadow",
            b: "shadow",
            c: "text-effect",
            d: "text-styling",
            ans: "a"
        },
        Q7: {
            question: "Q7: Which CSS property is used to change the size of text?",
            a: "font-size",
            b: "text-size",
            c: "size",
            d: "font-style",
            ans: "a"
        },
        Q8: {
            question: "Q8: Which CSS property is used to set the spacing between lines of text?",
            a: "line-height",
            b: "text-spacing",
            c: "line-spacing",
            d: "spacing",
            ans: "a"
        },
        Q9: {
            question: "Q9: Which CSS property is used to specify the type of cursor to be displayed when pointing on an element?",
            a: "mouse-cursor",
            b: "cursor-type",
            c: "pointer",
            d: "cursor",
            ans: "d"
        },
        Q10: {
            question: "Q10: Which CSS property is used to align text horizontally?",
            a: "text-align",
            b: "align-text",
            c: "text-position",
            d: "horizontal-align",
            ans: "a"
        },
        Q11: {
            question: "Q11: Which CSS property is used to create an underline on text?",
            a: "text-decoration",
            b: "underline",
            c: "text-underline",
            d: "decorative-text",
            ans: "a"
        },
        Q12: {
            question: "Q12: Which CSS property is used to control the visibility of an element?",
            a: "visible",
            b: "display",
            c: "visibility",
            d: "show",
            ans: "c"
        },
        Q13: {
            question: "Q13: Which CSS property is used to set the thickness of the border?",
            a: "border-size",
            b: "border-width",
            c: "thickness",
            d: "border-thickness",
            ans: "b"
        },
        Q14: {
            question: "Q14: Which CSS property is used to set the style of the border?",
            a: "border-style",
            b: "style",
            c: "border",
            d: "border-styling",
            ans: "a"
        },
        Q15: {
            question: "Q15: Which CSS property is used to control the spacing between individual characters?",
            a: "letter-spacing",
            b: "character-spacing",
            c: "text-spacing",
            d: "spacing",
            ans: "a"
        },
        Q16: {
            question: "Q16: Which CSS property is used to control the appearance of an element when the user mouses over it?",
            a: "hover",
            b: "mouse-over",
            c: "mouseover",
            d: "hovering",
            ans: "a"
        },
        Q17: {
            question: "Q17: Which CSS property is used to set the width of an element?",
            a: "width",
            b: "element-width",
            c: "size",
            d: "width-size",
            ans: "a"
        },
        Q18: {
            question: "Q18: Which CSS property is used to set the height of an element?",
            a: "height",
            b: "element-height",
            c: "size",
            d: "height-size",
            ans: "a"
        },
        Q19: {
            question: "Q19: Which CSS property is used to specify the space between the borders and the content of an element?",
            a: "padding",
            b: "spacing",
            c: "margin",
            d: "border-spacing",
            ans: "a"
        },
        Q20: {
            question: "Q20: Which CSS property is used to set the transparency of an element?",
            a: "transparency",
            b: "opacity",
            c: "alpha",
            d: "transparent",
            ans: "b"
        }
    },
    javascript:{
        Q1: {
            question: "Q1: What does JS stand for?",
            a: "JavaScript",
            b: "JavaSuper",
            c: "JustScript",
            d: "Jupiter",
            ans: "a"
        },
        Q2: {
            question: "Q2: Which of the following is NOT a valid JavaScript variable name?",
            a: "2myVar",
            b: "_myVar",
            c: "$myVar",
            d: "myVar2",
            ans: "a"
        },
        Q3: {
            question: "Q3: What type of language is JavaScript?",
            a: "Object-Oriented",
            b: "Procedural",
            c: "Functional",
            d: "All of the above",
            ans: "d"
        },
        Q4: {
            question: "Q4: What keyword is used to declare variables in JavaScript?",
            a: "var",
            b: "let",
            c: "const",
            d: "variable",
            ans: "a"
        },
        Q5: {
            question: "Q5: Which of the following is NOT a valid way to declare a JavaScript function?",
            a: "function myFunction() {}",
            b: "myFunction = function() {}",
            c: "myFunction() {}",
            d: "const myFunction = () => {}",
            ans: "c"
        },
        Q6: {
            question: "Q6: Which function is used to print data in the console?",
            a: "console.print()",
            b: "console.write()",
            c: "console.log()",
            d: "console.display()",
            ans: "c"
        },
        Q7: {
            question: "Q7: What is the result of 5 + '5' in JavaScript?",
            a: "10",
            b: "'55'",
            c: "'10'",
            d: "Error",
            ans: "b"
        },
        Q8: {
            question: "Q8: What does the `typeof` operator return for a function?",
            a: "'function'",
            b: "'object'",
            c: "'undefined'",
            d: "'string'",
            ans: "a"
        },
        Q9: {
            question: "Q9: Which of the following is NOT a JavaScript data type?",
            a: "boolean",
            b: "integer",
            c: "symbol",
            d: "array",
            ans: "b"
        },
        Q10: {
            question: "Q10: Which symbol is used for single-line comments in JavaScript?",
            a: "//",
            b: "/*",
            c: "**",
            d: "--",
            ans: "a"
        },
        Q11: {
            question: "Q11: Which function is used to parse a string and return an integer?",
            a: "parseInt()",
            b: "stringToInt()",
            c: "toInteger()",
            d: "strToInt()",
            ans: "a"
        },
        Q12: {
            question: "Q12: What is the JavaScript operator for exponentiation?",
            a: "^",
            b: "**",
            c: "^^",
            d: "expt()",
            ans: "b"
        },
        Q13: {
            question: "Q13: What will the following code output: console.log(typeof null);?",
            a: "'null'",
            b: "'object'",
            c: "'undefined'",
            d: "'string'",
            ans: "b"
        },
        Q14: {
            question: "Q14: What is the purpose of the `===` operator in JavaScript?",
            a: "Checks for equality with type conversion",
            b: "Checks for equality without type conversion",
            c: "Assigns a value to a variable",
            d: "None of the above",
            ans: "b"
        },
        Q15: {
            question: "Q15: What does the `isNaN()` function do in JavaScript?",
            a: "Returns true if the argument is not a number",
            b: "Returns true if the argument is a number",
            c: "Returns true if the argument is null",
            d: "Returns true if the argument is NaN",
            ans: "a"
        },
        Q16: {
            question: "Q16: Which function is used to add or remove elements from an array?",
            a: "splice()",
            b: "slice()",
            c: "push()",
            d: "pop()",
            ans: "a"
        },
        Q17: {
            question: "Q17: What does the `map()` function do in JavaScript?",
            a: "Applies a function to each element in an array and returns a new array",
            b: "Concatenates two arrays",
            c: "Returns the first index at which a given element can be found in the array",
            d: "Checks if all elements in an array pass a test",
            ans: "a"
        },
        Q18: {
            question: "Q18: Which method is used to join two or more arrays?",
            a: "concat()",
            b: "join()",
            c: "merge()",
            d: "combine()",
            ans: "a"
        },
        Q19: {
            question: "Q19: What does the `this` keyword refer to in JavaScript?",
            a: "Refers to the current function",
            b: "Refers to the parent function",
            c: "Refers to the global object",
            d: "Refers to the current object",
            ans: "d"
        },
        Q20: {
            question: "Q20: What is the purpose of the `querySelector()` method in JavaScript?",
            a: "Selects the first element that matches a specified CSS selector",
            b: "Selects all elements that match a specified CSS selector",
            c: "Selects the last element that matches a specified CSS selector",
            d: "Selects elements based on their class names",
            ans: "a"
        }
    }
    
};

const cardData = [
    { title: "python", subject: 2  },
    { title: "Web and App Crash Course", subject: 2 },
    { title: "Web & App Development(Madaris)", subject: 3 , 
        quizSubject:{
        HTML: "HTML",
        CSS: "CSS",
        JAVASCRIPT: "JAVASCRIPT"
     }, 
    },
    { title: "TypeScript", subject: 1 },
    { title: "Web And Mobile Hybrid App Develpment", subject: 4 },
    { title: "Generative AI & Chatbot Batch-3", subject: 1 } 
];


const quizDB = [];



function createCard(){
    for(key in cardData){
        let cardDetail = cardData[key]
        let title = cardDetail.title;
        let subject = cardDetail.subject

        document.querySelector(".cardContainer").innerHTML += `
                    <div class="card">
                    <h3>${title}</h3>
                    <p >${subject} subjects</p>
                    <button id="join">Join</button>
                    </div>
        `
        
        }
    
}
createCard()

// Selectors

const joinButtons = document.querySelectorAll('.card button');
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
const result = document.getElementsByClassName('result');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');
const scoreResult = document.getElementById("scorePercentage");
const subjectCon = document.querySelector(".subject");



const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");


document.getElementById("profile").style.display = "flex";
document.querySelector('.welcomeText').style.display = "block";
document.querySelector('.cardContainer').style.display = 'flex';
document.getElementById('profileName').textContent = ` ${storedUsername} `
document.getElementById('welcomeHeading').textContent = ` Hi! ${storedUsername} 👋 `

// console.log(joinButtons)

let questionCount = -1;
let score = 0;

let timeLeft = 1500; // Time in seconds

let timerInterval;

nextButton.style.display = 'none';
submitButton.style.display = 'none';


// Function for Create Cards



// Hanlde Logout Function
document.getElementById("logoutButton").addEventListener("click", function() {
    let popupContent = document.getElementById('popupContent');

   if(popupContent.style.display === "block"){
    popupContent.style.display = "none"
   }else{
    popupContent.style.display = "block"
   }

    swal("Logged Out!", "You have been logged out successfully.", "info");  

    window.location.href = "../HTML/login.html"
});

//  Handle Popup Content
document.getElementById('profileArrow').addEventListener('click' , function(){
   let popupContent = document.getElementById('popupContent');

   if(popupContent.style.display === "block"){
    popupContent.style.display = "none"
   }else{
    popupContent.style.display = "block"
   }
});

// Handle Join buttons Function for render question according card

joinButtons.forEach( button => {
    button.addEventListener('click', () => {
        subjectCon.innerHTML = "";
       
        let cardIndex = Array.from(button.parentNode.parentNode.children).indexOf(button.parentNode);
        // console.log(cardIndex);
        let cardDetail = cardData[cardIndex];
        
        // console.log(cardDetail)
        
        for(key in cardDetail){
            
            // console.log(`card Detail: ${cardDetail.quizSubject}`);
            if(key === 'quizSubject'){
                
                
                let quiz = cardDetail.quizSubject
                
                
                
                // console.log("Quiz:" + quiz)
                for (key in quiz){
                    let para = quiz[key]
                    
                    subjectCon.innerHTML += `
                    <p class="subjectPara" onclick="renderQuiz()"><span><i class="fa-solid fa-angle-right"></i></span> ${para} </p>
                    `
                }
                document.querySelector('.cardContainer').style.display = "none"
                
            }
        }


    //     
    })
})


// localStorage.clear()


function renderQuiz(){
        let cardId = event.target.textContent;
        console.log(cardId)
    
        if( cardId.toLowerCase().trim() === "html"){

            for(let key in questionObj.html){
                const question = questionObj.html[key];
                quizDB.push(question);
            }
        }else if(cardId.toLowerCase().trim() === "css"){
            for(let key in questionObj.css){
                const question = questionObj.css[key];
                quizDB.push(question);
            }
        }else if(cardId.toLowerCase().trim() === "javascript"){
            for(let key in questionObj.javascript){
                const question = questionObj.javascript[key];
                quizDB.push(question);
            }
        }
        subjectCon.style.display = "none"
        document.querySelector('.innerDiv').style.display = 'block'
        document.querySelector("nav").style.display = "none"
        document.querySelector('.welcomeText').style.display = "none"
        loadQuestion();
        startTimer();
        console.log(quizDB)

}
           


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



function resetQuiz(){
        document.querySelector('.cardContainer').style.display = "flex"
        showScore.style.display = 'none';
        document.querySelector('.innerDiv').style.display = 'none'
        questionCount = -1;
        score = 0;
        clearInterval(timerInterval);
        timeLeft = 1500; // Reset time
        timerDisplay.textContent = formatTime(timeLeft);
        startButton.style.display = "block";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
        document.querySelector("nav").style.display = "block"
        document.querySelector('.welcomeText').style.display = "block"
        subjectCon.style.display = "block"

}

logo.addEventListener('click' , () => {
    
    if(questionCount < 0){
        document.querySelector('.cardContainer').style.display = "flex"
        showScore.style.display = 'none';
        document.querySelector('.innerDiv').style.display = 'none'
        questionCount = -1;
        score = 0;
        clearInterval(timerInterval);
        timeLeft = 1500; // Reset time
        timerDisplay.textContent = formatTime(timeLeft);
        startButton.style.display = "block";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
        subjectCon.style.display = "block"

    }
    
    })

// Load Question function 
const loadQuestion = () => {
    // console.log(quizDB)
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
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer === undefined){
        alert("please Select any option")
    }else{

        startButton.style.display = 'none';
        nextButton.style.display = 'block';
        loadQuestion();
        startTimer();
        deselectAll();
    }
});

// Next button click event
nextButton.addEventListener('click', () => {
    
    const checkedAnswer = getCheckedAnswer();
// console.log(checkedAnswer)
    if (checkedAnswer === undefined){
        alert("Please Select any option")
    }else{
        const correctAnswer = quizDB[questionCount].ans;
        // console.log(correctAnswer)
        if (checkedAnswer === correctAnswer) {
            score++;
        }
        loadQuestion();
        deselectAll();
    }

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
    document.querySelector('.innerDiv').style.display = 'none'
    let finalScore = (score / quizDB.length) * 100;

    if(finalScore < "60"){
        showScore.innerHTML = `
        <div>
            <p class="failedText">You Are Failed! &#128542;</p>
        </div>
        <div>
            <p>Total Questions</p>
            <p>${quizDB.length}</p>
        </div>
        <div>
            <p>Correct Questions</p>
            <p>${score}</p>
        </div>
            <h3 id="scorePercentage">${finalScore} <span>%</span></h3>
            <button onclick="resetQuiz()">Back to Home</button>     
        `;
        showScore.querySelector("h3").style.borderColor = "red"
        showScore.querySelector("h3").style.color = "red"
    }else{
        showScore.innerHTML = `
        <div>

            <p class="passedText">Congratulations, you passed! &#128522;</p>
        </div>
        <div>
            <p>Total Questions</p>
            <p>${quizDB.length}</p>

        </div>
        <div>
            <p>Correct Questions</p>
            <p>${score}</p>

        </div>
            <h3>${finalScore} <span>%</span></h3>   
            <button onclick="resetQuiz()">Back to Home</button>  
        `;
    }
    showScore.classList.remove('scoreArea');
    showScore.style.display = 'flex';
    questionCount = -1;
    subjectCon.style.display = "block"

    

}



// Checked answer function
const getCheckedAnswer = () => {
    let answer;
    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
            curAnsElem.parentNode.style.backgroundColor = "#ECEFF7"
        }else{
            curAnsElem.parentNode.style.backgroundColor = "";
        }
    });
    return answer;
};

answers.forEach(curAnsElem => {
    curAnsElem.addEventListener('click', getCheckedAnswer);
});
// Deselect all answers
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};