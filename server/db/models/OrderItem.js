const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order', {
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

module.exports = OrderItem;
