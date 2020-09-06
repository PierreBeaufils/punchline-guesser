const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database'); //import the connector


class Difficulty extends Model {};


Difficulty.init({
    name: DataTypes.TEXT,
}, {
    sequelize, //the connector
    tableName: "difficulty",
});

module.exports = Difficulty;