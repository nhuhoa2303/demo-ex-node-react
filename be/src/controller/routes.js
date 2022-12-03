const express = require('express')
const routes = express.Router();
const productController = require('../controller/ProductController')
const initRoutesAPI = (app) => {
    routes.get('/', productController.findAll);
}
module.exports = initRoutesAPI;
