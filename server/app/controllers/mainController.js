const {
    Question,
    User,
    Difficulty,
    Quiz,
    Answer
} = require('../models');
const sequelize = require('../database');
const {
    Op
} = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const mainController = {

    getQuizz: async (req, res) => {
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
                    limit: 10
                });
            } else {
                questions = await Question.findAll({
                    include: ["good_answer"],
                    where: {
                        difficulty_id: quiz.difficulty_id
                    },
                    order: sequelize.random(),
                    limit: 10
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
                    limit: 10
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

    notFound: (req, res) => {
        res.status(404).json('Ce endpoint n\'existe pas');
    },

    signup: async (req, res) => {
        try {
            // Check if user exists
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user) {
                return res.status(203).json('Cette adresse mail existe déjà');
            }

            // if password and password confirmation don't match
            if (req.body.password !== req.body.passwordConfirm) {
                return res.status(203).json('les deux mots de passe ne correspondent pas');
            };

            // Crypt password if no errors
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(req.body.password, salt);

            // Create new user
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: encryptedPassword
            });

            await newUser.save();
            res.status(200).json({ message: 'Inscription effectuée !', redirect: '/login' });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                return res.status(203).json('Email/mot de passe incorrect');
            }

            // if User, check password
            const validPwd = await bcrypt.compare(req.body.password, user.password);
            if (!validPwd) {
                return res.status(203).json('Email/mot de passe incorrect');
            }

            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: 86400
            });

            const userInfos = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                accessToken: token,
            };

            res.status(200).json({ user: userInfos });

        } catch (error) {
            res.status(500).json(error);
        }
    },

    admin: async (req, res) => {
        try {
            let questions = await Question.findAll({
                include: ["good_answer", "difficulty"]
            });
            let answers = await Answer.findAll();
            res.status(200).json({ questions, answers });
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    logout: (req, res) => {
        // req.session.destroy();
        res.status(200).json({ isLogged: false, redirect: '/' });
    },

}

module.exports = mainController;