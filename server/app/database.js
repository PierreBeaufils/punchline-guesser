const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false, //Disable requests views in terminal
    define: {
        underscored: true, //Enable snake_case naming
    },
});

module.exports = sequelize;