const quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('.option1');
console.log(option1);
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const submit = document.querySelector("#submit");

let questionCount = 0;
const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    console.log(questionList.question);
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();
