import '../css/bootstrap.min.css';
import '../css/main.css';

import Quiz from './Quiz';
import Questions from './Questions';


const questionsCls = new Questions();
const newQuiz = new Quiz({
    questions: questionsCls.questions,
    questionsContainer: document.getElementById('questionsContainer')
});

const finishBtn = document.getElementById('finish');
const startBtn = document.getElementById('start')

startBtn.addEventListener('click', (event) => {
    newQuiz.init();
    event.target.classList.add('d-none');
    finishBtn.classList.remove('d-none');
})

finishBtn.addEventListener('click', (event) => {
    newQuiz.collectUserAnswers();
    event.target.classList.add('d-none');
    startBtn.textContent = 'start again';
    startBtn.classList.remove('d-none');
})




let name = 'anas';

name = 'mohannd';