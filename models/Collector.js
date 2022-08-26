const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Collector = sequelize.define('collector', {
  name: Sequelize.STRING,
  budget: Sequelize.NUMBER
})

module.exports = {Collector};