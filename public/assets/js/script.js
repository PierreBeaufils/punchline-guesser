/*
const app = {
    quiz: document.getElementById('quiz'),


    init: () => {
        app.displayQuiz();
    },

    displayQuiz: async () => {
        try {
            const response = await fetch('http://localhost:3000/quiz/2');

            const quiz = await response.json();

            for (const questions of quiz) {

            }

        } catch (error) {
            alert('Une erreur s\'est produite lors de la récupération du quiz');
            console.error(error);
        }
    },

    putQuestionInDom: function (question) {
        const questionDiv = document.createElement('div');



        app.quiz.appendChild(questionDiv);
    }


}


document.addEventListener('DOMContentLoaded', app.init);
*/