const db = require('../models')
const prod = db.products;
const types = db.types;
const Op = db.Sequelize.Op;

exports.createProduct = (req, res) => {

}

exports.findAll = (req, res) => {
    // const name = req.body.name;
    // const price = req.body.price;
    // var condition = name ? {name : { [Op.like]: `%${name}%` }} : null;
    prod.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}
