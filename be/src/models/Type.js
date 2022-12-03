
const db = require('../database/database')
sequelize = db.sequelize
Sequelize = db.Sequelize;

const Type = sequelize.define('type', {
    id: {
        type: Sequelize.INTEGER,
        // tự động tăng
        autoIncrement: true,
        // ko cho phép null
        allowNull: false,
        // là khóa chính
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Type;
