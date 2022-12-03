
const db = require('../database/database')

db.products = require('./Product');
db.types = require('./Type');

db.types.hasMany(db.products, {foreignKey: 'type_id'})
db.products.belongsTo(db.types, {
    foreignKey: 'type_id'
})
module.exports = db;
