const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config')
const connection = new Sequelize(dbConfig.db, dbConfig.user , dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

try {
    connection.authenticate();
    console.log('Connection DB successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

var db = {};

db.sequelize = connection;
db.Sequelize = Sequelize;

module.exports = db;
