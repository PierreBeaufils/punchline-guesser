const Answer = require('./answer');
const Difficulty = require('./difficulty');
const Question = require('./question');
const Quiz = require('./quiz');
const User = require('./user');

// Question <-> Answer
Answer.hasMany(Question, {
    foreignKey: "answer_id",
    as: "question"
});

Question.belongsTo(Answer, {
    foreignKey: "answer_id",
    as: "good_answer"
});


// Question <-> Difficulty
Question.belongsTo(Difficulty, {
    foreignKey: "difficulty_id",
    as: "difficulty"
});

Difficulty.hasMany(Question, {
    foreignKey: "difficulty_id",
    as: "questions"
});


// Quiz <-> Difficulty
Quiz.belongsTo(Difficulty, {
    foreignKey: "difficulty_id",
    as: "quiz_difficulty"
});

Difficulty.hasOne(Quiz, {
    foreignKey: "difficulty_id",
    as: "quizzes"
});



module.exports = {
    Answer,
    Difficulty,
    Question,
    Quiz,
    User
};