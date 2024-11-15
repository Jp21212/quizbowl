let questionList = ['Whats bobs favrotie school object?', 'Whats coopers first name?', 'Does Cooper like us or engineering more?', 'Whats the capatial of Columbia?', 'Whats the capital of California?', 'Whats the capital of Colorado?', 'Whats the capital of Georgia?', 'Whats the capital of Arizona?', 'Whats the capital of Idaho?','Whats the capital of Massachusetts?', 'Whats the capital of Nebraska?', 'Whats the capital of Nevada?']
let answerList = ['Pencil', 'Louis', 'Us', 'Bogota', 'Sacramento', 'Denver', 'Atlanta', 'Phoenix', 'Boise', 'Boston', 'Lincoln', 'Carson City',];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = document.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

question.textContent = questionList[questionIndex];

let submitFucntion = () => {
    button.addEventListener('click', () =>{
        if(input.ariaValueMax.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score - 1;
            scoreContainer.textContent = "Score: " + score;
        }
        //PUT ENDGAME FUNCTION HERE
    });
}

let endGame = () => {
    if(questionIndex > 2){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Good Boy!";
        input.computedStyleMap.display = none;
        button.computedStyleMap.display = none;
    }
}

submitFunction();
