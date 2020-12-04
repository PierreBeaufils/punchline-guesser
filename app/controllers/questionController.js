const {
    Question,
    Difficulty,
    Answer
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
            // Control if fields are empty
            if (!req.body.questionName || !req.body.difficultyId || !req.body.answerName) {
                throw new Error('Remplissez tous les champs !');
            }
            // Parse the id from text to integer
            const difficultyId = parseInt(req.body.difficultyId, 10);

            // Check if answer already exists, otherwise create it, same for the question
            const [answer, created] = await Answer.findOrCreate({ where: { name: req.body.answerName } });
            const [question, iscreated] = await Question.findOrCreate({
                where: { question: req.body.questionName },
                defaults: {
                    difficulty_id: difficultyId,
                    answer_id: answer.id
                }
            });

            res.status(200).json('La question a bien été ajoutée');
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
            const question = await Question.findByPk(id);

            if (question) {
                // Delete if founded
                await question.destroy();
                res.status(200).json('question supprimée');
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