const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const questionController = require('./controllers/questionController');

//const userController = require('./controllers/userController');
const adminMW = require('./middlewares/adminMiddleware');




router.get('/quizz', mainController.getQuizz);
router.get('/quiz/:id', mainController.displayQuiz);

router.get('/questions', questionController.list);
router.get('/question/:id', questionController.read);
router.post('/question', questionController.create);
router.delete('/question/:id', questionController.delete);

router.post('/signup', mainController.signup);
router.post('/login', mainController.login);
router.get('/logout', mainController.logout); // Useless

router.get('/admin', [adminMW.verifyToken, adminMW.isAdmin], mainController.admin);
/*
router.get('/admin/addquestion', questionController.addQuestion);
router.post('/admin/addquestion', questionController.submitQuestion);
*/

router.use(mainController.notFound);

module.exports = router;