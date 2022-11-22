var quizDB = [
    {
        question: "Q1: What does HTML stand for?",
        a:"Hyperlinks Text Markup Language",
        b:"Hyper Text Markup Language",
        c:"Home Tool Markup Language",
        d:"House Text Markup Language",

        ans: "ans2",
    },

    {
        question: "Q2: Pick in-line element in HTML ",
        a:"Tag-Span",
        b:"Tag-div",
        c:"Tag-p",
        d:"Tag-h1",

        ans: "ans1",
    },

    {
        question: "Q3: PHP Full Form",
        a:"HyperText Pre Processor  ",
        b:"Pre HyperText Processor",
        c:"Pre Processor HyperText",
        d:"All The Above",

        ans: "ans1",
    },

    {
        question: "Q4: SQL Full Form",
        a:"Structure Query Language",
        b:"Structure Qurey Logout",
        c:"Structure Queue Language",
        d:"Structure Quick Language",

        ans: "ans1",
    },

    {
        question: "Q5: Pick The Block Element ",
        a:"Tag-h1",
        b:"Tag-p",
        c:"Tag-div",
        d:"All The Above",

        ans: "ans4",
    },
];

const question = document.querySelector('.question')
//option
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')

const answers = document.querySelectorAll('.answer')

const submit = document.querySelector('#submit')

const showscore = document.querySelector('#showscore')

let questionCount = 0;
let score = 0;

function loadQuestion()
{
    const questionlist = quizDB[questionCount];
    question.innerText = questionlist.question;

    option1.innerText = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;

    //question.innerHTML = quizDB[questionCount].question;

}

loadQuestion();

const getcheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>
    {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectall =()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}


submit.addEventListener('click',() =>{
    const checkedAnswer = getcheckAnswer();
    //console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
       score++;
    };
    questionCount++;
    deselectall();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML = `<h3> Your Scored ${score}/${quizDB.length}</h3>
        <button class="btnPlay" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
});