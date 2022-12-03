
const db = require('../database/database')
sequelize = db.sequelize
Sequelize = db.Sequelize;

const Product = sequelize.define('products', {
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
    },
    price: {
        type: Sequelize.DOUBLE,
    },
    cost: {
        type: Sequelize.INTEGER,
    },
    origin: {
        type: Sequelize.STRING,
    }
    ,
    dateAdd: {
        type: Sequelize.DATE,
        field: 'date_add'
    },
    image: {
        type: Sequelize.STRING,
    }
})

module.exports = Product;
