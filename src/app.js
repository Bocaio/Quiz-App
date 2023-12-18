const questions = [
    {
        question:"Who is the strongest avenger?",
        answers: [
            {
                answer:'Black Widow',correct:true,
            },
            {
                answer:'Thor',correct:false,
            },
            {
                answer:'Captain America',correct:false,
            },
            {
                answer:'Doctor Strange',correct:false,
            }

        ]
    },
    {
        question:"Who is the villain?",
        answers: [
            {
                answer:'Loki',correct:false,
            },
            {
                answer:'Odin',correct:true,
            },
            {
                answer:'Hela',correct:false,
            },
            {
                answer:'Thanos',correct:false,
            }

        ]
    },
    {
        question:"Who is the boss?",
        answers: [
            {
                answer:'Iron-man',correct:false,
            },
            {
                answer:'Thor',correct:false,
            },
            {
                answer:'Captain America',correct:false,
            },
            {
                answer:'Kang',correct:true,
            }

        ]
    },
    {
        question:"Who is the weakest avenger?",
        answers: [
            {
                answer:'Hulk',correct:true,
            },
            {
                answer:'Black Widow',correct:false,
            },
            {
                answer:'Groot',correct:false,
            },
            {
                answer:'Hawkeye',correct:false,
            }

        ]
    },
    {
        question:"Who is the funniest Avenger?",
        answers: [
            {
                answer:'Rocket',correct:false,
            },
            {
                answer:'Thor',correct:false,
            },
            {
                answer:'Spider-Man',correct:false,
            },
            {
                answer:'Doctor Strange',correct:true,
            }

        ]
    }
]

let questionIndex = 0;

const questionAndanswer = document.querySelector(`#questionAndanswer`)
const questiontab = document.querySelector(`#questiontab`)
const answersButton = document.querySelector(`#answersButton`)
const quiz = document.querySelector(`#quiz`)
let correctAnswer = 0;
let questionnumber = 1;

const changeQuestion = () => {
    resetFun();
    
        questiontab.innerText =questionnumber+'. '+ questions[questionIndex].question;
    const currentQuiz = questions[questionIndex];
    currentQuiz.answers.forEach(el => {
        const answerBtn = document.createElement('button');
        answerBtn.innerText = el.answer;
        answerBtn.classList.add('border','border-2','rounded-sm','w-full','mt-2','border-black','p-1','pl-4','text-lg','text-left','hover:bg-slate-500')
        answersButton.appendChild(answerBtn);
        if(el.correct){
            answerBtn.dataset.correct = el.correct
        }
        answerBtn.addEventListener('click',checkAnswer)
    })
    ++questionIndex;
    ++questionnumber;
    
    

}

const checkAnswer = (e) => {
    const selectedAnswer = e.target;
    const isCorrect = selectedAnswer.dataset.correct === 'true';
    if(isCorrect){
        selectedAnswer.classList.add('bg-[#65B741]');
        selectedAnswer.classList.remove('hover:bg-slate-500');
        console.log('hi');
        ++correctAnswer;
    }
    else{
        selectedAnswer.classList.add('bg-[#EF4040]')
        selectedAnswer.classList.remove('hover:bg-slate-500');
        console.log('hool');
        // correctAnswer -= 1;
    }
    Array.from(answersButton.children).forEach(el =>{
        el.classList.remove('hover:bg-slate-500',);
        el.classList.add('cursor-not-allowed')
        if(el.dataset.correct === 'true'){
        el.classList.add('bg-[#65B741]');
        el.classList.add('text-white');
        el.classList.remove('hover:bg-slate-500');
        nextBTN.style.display = 'block';
    }
    el.disabled = true;

    })
}

// changeQuestion();

nextBTN.addEventListener('click',()=>{
    if(questionIndex<questions.length){
        changeQuestion();
    }
    else{
        scoreFun();
    }
})


const resetFun = () => {
    nextBTN.style.display = 'none';
    answersButton.innerHTML='';
}

const scoreFun = () => {
    resetFun();
    questiontab.innerText = `Your Score is ${correctAnswer}/${questions.length}`
        const textForScore = document.createElement('button')
        textForScore.innerText = "Start Again";
        textForScore.classList.add('bg-blue-600','mt-5','text-lg','font-semibold','text-white','py-1','px-6','rounded-sm')
        answersButton.appendChild(textForScore)
        textForScore.addEventListener('click',()=>{
            questionIndex = 0;
            correctAnswer = 0;
            questionnumber = 1;
            changeQuestion();
        })
}
// console.log(questions[++questionIndex].answers[1].answer);