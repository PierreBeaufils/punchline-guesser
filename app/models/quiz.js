const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database');

class Quiz extends Model {};


Quiz.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    difficulty_id: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: "quiz"
});

module.exports = Quiz;