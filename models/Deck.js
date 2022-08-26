const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Deck = sequelize.define('deck', {
  title: Sequelize.STRING,
})

module.exports = {Deck};