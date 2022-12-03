# demo-ex-node-react
create nodejs serve

// tài liệu tham khảo
https://www.bezkoder.com/node-js-express-sequelize-mysql/ 
https://devdotcode.com/complete-guide-to-build-a-restful-api-with-node-js-and-express/
https://www.bezkoder.com/sequelize-associate-one-to-many/
https://www.topcoder.com/thrive/articles/one-to-many-relationships-in-mysql-database-using-sequelize-orm
huong dan tao project nodejs sd sequelize 
https://www.youtube.com/watch?v=Yxr2SfJf_XM&list=PLB7-QsVjjfi0paXZX5dCLPJpCKlmD161t

npm init
npm install experss cors mysql2 sequelize sequelize-cli nodemon --save dev



///////tạo app.js

const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const connectDatabase = require('./src/database/database')
const app = express();


const db = require('./src/models/index');
const controller = require('./src/controller/ProductController')
db.sequelize.sync();

require("dotenv").config();




// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// simple route
app.use(routes)



const PORT= process.env.APP_PORT;
// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// cấu hình .env
 HOST: 'localhost'
 USER: 'root'
 PASSWORD: 'nhuhoa2303'
 DB: 'demo_db_nodejs'
 DIALECT: 'mysql'
APP_PORT: 8080

// tạo file src/
config 
- db.config

require("dotenv").config();
module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
    dialect: process.env.DIALECT,
};

controller
- database: 
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
----
models 
- Product

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
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    origin: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    ,
    dateAdd: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'date_add'
    },
    image: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Product;


- Type

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

- index


const db = require('../database/database')

db.products = require('./Product');
db.types = require('./Type');

db.types.hasMany(db.products, {foreignKey: 'type_id'})
db.products.belongsTo(db.types, {
    foreignKey: 'type_id'
})


module.exports = db;

-----





