const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database');

class Answer extends Model {};

Answer.init({
    name: DataTypes.TEXT,
}, {
    sequelize,
    tableName: "answer"
});

module.exports = Answer;