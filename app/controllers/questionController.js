const {
    Question,
    Difficulty
} = require('../models');

const questionController = {

    list: async (req, res) => {
        try {
            const questions = await Question.findAll({
                include: 'difficulty'
            });

            res.json(questions);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    create: async (req, res) => {
        try {
            // Handle required fields
            if (!req.body.title) {
                throw new Error('title obligatoire');
            }
            if (!req.body.list_id) {
                throw new Error('list_id obligatoire');
            }
            // Create question
            const newQuestion = await Question.create({
                question: req.body.question,
                difficulty_id: req.body.difficulty_id,
                answer_id: req.body.list_id,
            });

            res.status(200).json(newQuestion);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    read: async (req, res) => {
        try {
            const id = req.params.id;

            const question = await Question.findByPk(id, {
                include: 'difficulty'
            });

            if (question) {
                res.json(question);
            } else {
                res.status(404).json(`Aucune question à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const question = await Question.findByPk(id);

            if (question) {
                if (req.body.question) {
                    question.question = req.body.question;
                }
                if (req.body.difficulty_id) {
                    question.difficulty_id = req.body.difficulty_id;
                }
                if (req.body.answer_id) {
                    question.answer_id = req.body.answer_id;
                }
                // BDD Saving
                const questionUpdated = await Question.save();
                res.json(questionUpdated);
            } else {
                res.status(404).json(`Aucune question à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const question = await question.findByPk(id);

            if (question) {
                // Delete if founded
                await Question.destroy();
                res.json('question supprimée');
            } else {
                res.status(404).json(`Aucune question à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    createOrUpdate: async (req, res) => {
        try {
            // on essaye de récupérer la carte en fonction de l'id éventuel
            let question;
            if (req.params.id) {
                question = await Question.findByPk(req.params.id);
            }
            // si on connait cette question
            if (question) {
                // on met à jour
                await questionController.update(req, res);
            } else {
                // sinon on crée
                await questionController.create(req, res);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
};

module.exports = questionController;