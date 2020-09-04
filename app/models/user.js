const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {};

User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    username: Sequelize.STRING,
    role: Sequelize.STRING
}, {
    sequelize,
    tableName: "user"
});


module.exports = User;