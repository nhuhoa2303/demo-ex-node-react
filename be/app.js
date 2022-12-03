const express = require("express");
const cors = require("cors");
const initRoutesAPI = require("./src/controller/routes.js");
const app = express();
// cấu hình db để tạo table
const db = require('./src/models/index');
db.sequelize.sync();

require("dotenv").config();




// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// cấu hình routes
app.use(initRoutesAPI)



const PORT= process.env.APP_PORT;
// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
