const {sequelize} = require('../db');
const {Sequelize} = require('sequelize');

const Card = sequelize.define('card', {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.INTEGER
});

module.exports = { Card };