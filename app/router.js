const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const questionController = require('./controllers/questionController');

//const userController = require('./controllers/userController');
//const adminMW = require('./middlewares/adminMW');




router.get('/', mainController.home);

router.get('/quiz/:id', mainController.displayQuiz);

router.get('/questions', questionController.list);
router.get('/question/:id', questionController.read);
/*
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);
router.post('/login', userController.login);
router.post('/signup', userController.signup);


router.get('/profile', userController.profile);
router.get('/logout', userController.logout);

router.get('/admin', adminMW, userController.admin);
router.get('/admin/addquestion', questionController.addQuestion);
router.post('/admin/addquestion', questionController.submitQuestion);
*/


router.use(mainController.notFound);

module.exports = router;