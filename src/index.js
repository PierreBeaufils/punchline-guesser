var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
}, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
}, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
}, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
}, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
}];

var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $('#quiz'); //Quiz div object

// Display initial question
displayNext();

// Click handler for the 'next' button
buttonNext.addEventListener('click', function (e) {
    e.preventDefault();

    choose();

    // If no user selection, progression is stopped
    if (isNaN(selections[questionCounter])) {
        alert('Veuillez choisir une réponse');
    } else {
        questionCounter++;
        displayNext();
    }
});


// Click handler for the Start quizz
startButton.addEventListener('click', function (e) {
    e.preventDefault();
    // On initialise le compteur
    questionCounter = 0;
    // On lance displayNext pour afficher la première question
    displayNext();
});


//création de la question dans le DOM
function createQuestionElement(index) {
    var qElement = $('<div>', {
        id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
};

// Creates a list of the answer choices as radio inputs
function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
    }
    return radioList;
};

// Reads the user selection and pushes the value to an array
function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
}

// Display next question
function displayNext() {

    //On fade out la question répondue
    question.fadeOut();

    //S'il reste des questions, on affiche la prochaine, sinon on affiche le score
    if (questionCounter < questions.length) {
        //On appele la fonction createQuestionInDom pour créer la question dans le DOM
        var nextQuestion = createQuestionInDom(questionCounter);
        //On la fadeIn
        nextQuestion.fadeIn();
    } else {
        displayScore();
    }
};

// Afficher le score
function displayScore() {

    // On fetch totalScore et l'ensemble des réponses données

    console.log(`Tu as fais un score de ${totalScore} /
        ${questions.length}`);

}

function fadeOut() {
    question.style.display = 'none';
}

function fadeIn() {
    question.style.display = 'block';
}