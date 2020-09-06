const {
    Question,
    Difficulty
} = require('../models');

const questionController = {

    list: async (req, res) => {
        try {

            const questions = await question.findAll({
                include: 'labels',
                order: [
                    ['position', 'ASC'],
                ],
            });
            // envoyer une réponse
            res.json(questions);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // créer une carte
    create: async (req, res) => {
        try {
            // gérer les champs obligatoire
            if (!req.body.title) {
                throw new Error('title obligatoire');
            }
            if (!req.body.list_id) {
                throw new Error('list_id obligatoire');
            }
            // créer la carte
            const newquestion = await question.create({
                question: req.body.question,
                difficulty_id: req.body.difficulty_id,
                answer_id: req.body.list_id,
            });
            // envoyer une réponse
            res.json(newquestion);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // lire une carte
    read: async (req, res) => {
        try {
            // récupérer l'id demandé
            const id = req.params.id;
            // trouver la carte
            const question = await question.findByPk(id, {
                include: 'labels',
                order: [
                    ['position', 'ASC']
                ],
            });
            // si tout va bien on donne la carte
            if (question) {
                res.json(question);
            }
            // sinon on donne une erreur
            else {
                res.status(404).json(`Aucune carte à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // mettre à jour une carte
    update: async (req, res) => {
        try {
            // récupérer l'id demandé
            const id = req.params.id;
            // trouver la carte
            const question = await question.findByPk(id);
            // si tout va bien on modifie
            if (question) {
                // mettre à jour la carte avec les infos passées
                // si on nous a renseigné un champ, on le modifie
                if (req.body.title) {
                    question.title = req.body.title;
                }
                if (req.body.color) {
                    question.color = req.body.color;
                }
                if (req.body.position) {
                    question.position = req.body.position;
                }
                if (req.body.list_id) {
                    question.list_id = req.body.list_id;
                }
                // sauvegarder en bdd
                const questionSaved = await question.save();
                // envoyer une réponse
                res.json(questionSaved);
            }
            // sinon on donne une erreur
            else {
                res.status(404).json(`Aucune carte à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // supprimer une carte
    delete: async (req, res) => {
        try {
            // récupérer l'id demandé
            const id = req.params.id;
            // trouver la carte
            const question = await question.findByPk(id);
            // si on trouve
            if (question) {
                // on supprime
                await question.destroy();
                res.json('Carte supprimée');
            }
            // sinon on donne une erreur
            else {
                res.status(404).json(`Aucune carte à l'id ${id}`);
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
                question = await question.findByPk(req.params.id);
            }
            // si on connait cette carte
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