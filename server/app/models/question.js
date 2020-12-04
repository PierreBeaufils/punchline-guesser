const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database');

class Question extends Model {};


Question.init({
    question: DataTypes.TEXT,
    difficulty_id: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: "question"
});

module.exports = Question;