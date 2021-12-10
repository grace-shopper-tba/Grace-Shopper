const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
  subtotal: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
})

module.exports = Cart;
