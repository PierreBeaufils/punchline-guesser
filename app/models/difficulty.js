const Sequelize = require('sequelize');
const sequelize = require('../database'); //import the connector


class Difficulty extends Sequelize.Model {};


Difficulty.init({
    name: Sequelize.STRING
}, {
    sequelize, //the connector
    tableName: "difficulty",
});

module.exports = Difficulty;