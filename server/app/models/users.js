const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../database');

class User extends Model { };

User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    username: DataTypes.TEXT,
    role: DataTypes.TEXT,
}, {
    sequelize,
    tableName: "users"
});


module.exports = User;