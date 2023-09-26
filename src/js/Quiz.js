export default class Quiz {
    constructor(config) {
        this.questions = config.questions;
        this.questionsContainer = config.questionsContainer;
        this.shuffledQuestions = this.shufflingQuestions(this.questions);
    }
    
    init() {
        this.displayQuestions();
    }

    collectUserAnswers () {
        const userAnswers = Array.from(document.querySelectorAll('.userAnswers'));
        let correctAnswers = 0;

        this.shuffledQuestions.forEach((question, questionIndex) => {
            const currentAnswer = userAnswers[questionIndex].querySelector('input[type=radio]:checked') || '';

            if(currentAnswer.value === question.correctAnswer) {
                correctAnswers += 1;
                userAnswers[questionIndex].querySelector('.bg-success').classList.remove('d-none');
            } else {
                userAnswers[questionIndex].querySelector('.bg-danger').classList.remove('d-none');
            }
        })
        const result = document.querySelector('.result h1');
        result.classList.remove('d-none');
        result.textContent = `${correctAnswers} / ${this.questions.length}`
    }

    displayQuestions () {
        let output = "";

        this.shuffledQuestions.forEach((question, index) => {
            output += `
            <div class="card bg-secondary mb-3">
            <div class="card-header">Question <span>${index + 1}</span></div>
            <div class="card-body">
              <h4 class="card-title text-center my-4">${question.title}</h4>
              <div class="userAnswers d-flex flex-wrap justify-content-center" role="group" aria-label="Basic radio toggle button group">
                <div class="btn-group d-flex justify-content-center my-3">
                    ${this.displayAnswers(question.answers,index+1)}
                </div>
              <div class="d-flex align-items-center"> 
                    <span class="badge bg-success my-auto d-none">Correct</span>
                    <span class="badge bg-danger my-auto d-none">Wrong</span>
              </div>
              </div>
            </div>
          </div>
            `
        });
        this.questionsContainer.innerHTML = output;
    }

    displayAnswers (answers, questionNumber) {
        let output = "";

        for (const key in answers) {
            output += `
            <input type="radio" class="btn-check" name="Q-${questionNumber}" value="${key}" id="${questionNumber}-${key}" autocomplete="off">
            <label class="btn btn-outline-primary mx-2" for="${questionNumber}-${key}">${answers[key]}</label>
            `
        }
        return output;
    }

    shufflingQuestions (questions) {
        const newArray = [];
        while(questions.length) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            newArray.push(questions[randomIndex]);
            questions = questions.filter((item) => item != questions[randomIndex]);
        }
        return newArray;
    }
}