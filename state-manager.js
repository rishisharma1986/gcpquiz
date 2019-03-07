function renderFront() {
    console.log(`${'renderFront'} ran`);
    // renders home screen and allows user to start the quiz

    // In case this is a quiz restart, reset the question number and score.
    STORE.progress.score = 0;
    STORE.progress.questionNum = 0;

    // $('main').on('click', '#start', function (event) {
         //startQuiz();
    // )};
    startQuiz();
}

function startQuiz() {
    console.log(`${'startQuiz'} ran`);
    // if user hits start, begin quiz and render question.
    
    // need first to remove front page material like start button.
    renderQuestion();
}

function generateQuestion() {
    console.log(`${'generateQuestion'} ran`);
    const questionIndex = STORE.progress.questionNum;
    // Increment QuestionNum for the next round.
    STORE.progress.questionNum ++;
    const answerOrder = getRandomAnswerOrder();
    // fetch question / answer data
    const question = STORE.QA[questionIndex].question;
    const answer1 = STORE.QA[questionIndex].answers[answerOrder[0]];
    const answer2 = STORE.QA[questionIndex].answers[answerOrder[1]];
    const answer3 = STORE.QA[questionIndex].answers[answerOrder[2]];
    const answer4 = STORE.QA[questionIndex].answers[answerOrder[3]];
    return `<h2>${question}</h2>
            <form>
                <fieldset>
                    <label class="answer">
                        <input type="radio" value="${answer1}" name="answer" required>
                        <span>${answer1}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answer2}" name="answer" required>
                        <span>${answer2}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answer3}" name="answer" required>
                        <span>${answer3}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answer4}" name="answer" required>
                        <span>${answer4}</span>
                    </label>
                </fieldset>
                <button type="submit" id="submit">Submit</button>
            </form>`
}

function getRandomAnswerOrder() {
    //  Let's do the Fisher-Yates shuffle! 
    const randomAnswerOrder = [0,1,2,3];
    for (let i = randomAnswerOrder.length - 1; i > 0; i--) {
        let n = Math.floor(Math.random() * (i + 1)); // generate a random index from 0 to i
        [randomAnswerOrder[i], randomAnswerOrder[n]] = [randomAnswerOrder[n], randomAnswerOrder[i]]; // swap 
    }
    console.log(`${'getRandomAnswerOrder'} ran`);
    return randomAnswerOrder;
}

function renderQuestion() {
    $('#inject-question').html(generateQuestion());
    console.log(`${'renderQuestion'} ran`);
    awaitAndValidateResponse();
}

function awaitAndValidateResponse(){
    // listen for submit
    // on submit, validate answer. 
    // if correct, 
        // call correct screen renderer
    // if incorrect, 
        // call incorrect screen renderer
    console.log(`${'awaitAndValidateResponse'} ran`);
}

function renderResponseCorrect() {
    // render correct answer screen with data from validate.
    console.log(`${'renderResponseCorrect'} ran`);
}

function renderResponseIncorrect() {
    // render correct answer screen with data from validate.
    console.log(`${'renderResponseIncorrect'} ran`);
}

function renderNextQuestion() {

    // Issue: how to handle penultimate question? 

    // listen for next button click
    // Unless penultimate, 
        // renderQuestion()
        // update progress with data from progress object (which validate will have updated) 
}

function renderEnd() {
 // if state tracker was index of Store is length -1, then render the end screen.
 // must be able to call restart the quiz and clear state.
 console.log(`${'renderEnd'} ran`);

}

function createQuiz() {
    renderFront();
    console.log(`${'createQuiz'} ran`);
}

$(createQuiz);