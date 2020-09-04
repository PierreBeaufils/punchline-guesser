const Sequelize = require('sequelize');
const sequelize = require('../database');

class Answer extends Sequelize.Model {};

Answer.init({
    name: Sequelize.STRING,
}, {
    sequelize,
    tableName: "answer"
});

module.exports = Answer;