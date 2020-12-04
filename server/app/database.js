const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    logging: false, //Disable requests views in terminal
    define: {
        underscored: true, //Enable snake_case naming
    },
});

module.exports = sequelize;