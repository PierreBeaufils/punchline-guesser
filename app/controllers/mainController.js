const {
    Question,
    User,
    Difficulty,
    Quiz,
    Answer
} = require('../models/');
const sequelize = require('../database');
const {
    Op
} = require("sequelize");


const mainController = {

    home: async (req, res) => {
        try {
            const quizzes = await Quiz.findAll({
                include: 'quiz_difficulty'
            });
            res.json(quizzes);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    displayQuiz: async (req, res) => {
        try {
            const quizId = parseInt(req.params.id, 10);
            const quiz = await Quiz.findByPk(quizId, {

                include: 'quiz_difficulty'
            });
            //Get questions by difficulty according to the quiz
            let questions;
            if (quizId === 4) {
                questions = await Question.findAll({
                    include: ["good_answer"],
                    order: sequelize.random(),
                    limit: 3
                });
            } else {
                questions = await Question.findAll({
                    include: ["good_answer"],
                    where: {
                        difficulty_id: quiz.difficulty_id
                    },
                    order: sequelize.random(),
                    limit: 3
                });
            };



            //For each question, get the answer + 3 random answers in an array to display
            const questionsWithAnswers = await Promise.all(questions.map(async (question) => {


                let answers = [];
                answers.push(question.good_answer); //Push the good answer

                const randomAnswers = await Answer.findAll({
                    where: {
                        id: {
                            [Op.ne]: question.good_answer.id
                        } //
                    },
                    order: sequelize.random(),
                    limit: 3
                });

                randomAnswers.forEach(randomAnswer => {
                    answers.push(randomAnswer);
                });

                question.dataValues['answers'] = answers;
                question.dataValues.answers.sort(() => Math.random() - 0.5);

                return question;
            }));
            res.json(questionsWithAnswers);

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    playQuiz: async (req, res) => {
        try {
            const quizId = parseInt(req.params.id, 10);
            const quiz = await Quiz.findByPk(quizId, {

                include: 'quiz_difficulty'
            });
            //Get questions by difficulty according to the quiz
            const questions = await Question.findAll({
                include: ["good_answer"],
                where: {
                    difficulty_id: quiz.difficulty_id
                },
                order: sequelize.random(),
                limit: 3
            });

            const questionsWithAnswers = await Promise.all(questions.map(async (question) => {

                let answers = [];
                answers.push(question.good_answer); //Push the good answer

                const randomAnswers = await Answer.findAll({
                    where: {
                        id: {
                            [Op.ne]: question.good_answer.id
                        } //
                    },
                    order: sequelize.random(),
                    limit: 3
                });

                randomAnswers.forEach(randomAnswer => {
                    answers.push(randomAnswer);
                });

                question.dataValues['answers'] = answers;
                question.dataValues.answers.sort(() => Math.random() - 0.5);

                return question;
            }));

            //Get answers from the post form quiz

            let totalScore = 0;
            let userResponses = [];

            for (let question of questionsWithAnswers) {
                const isGood = question.good_answer.id === parseInt(req.body[`question_${question.id}`]);
                console.log(question.good_answer.id, parseInt(req.body[`question_${question.id}`]));
                if (isGood) {
                    totalScore++;
                }
                console.log(isGood);
                userResponses.push({
                    question_answer: question.good_answer.id,
                    user_answer: parseInt(req.body[`question_${question.id}`]),
                    isGood
                })
            };

            res.render('score', {
                userResponses,
                totalScore,
                questionsWithAnswers
            });

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    notFound: (req, res) => {
        res.status(404).json('Ce endpoint n\'existe pas');
    },

}

module.exports = mainController;