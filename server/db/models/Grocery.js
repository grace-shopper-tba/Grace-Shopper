const Sequelize = require('sequelize')
const db = require('../db')

const Grocery = db.define('grocery', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: Sequelize.ENUM,
    allowNull: false,
    values: ['fruit', 'vegetable'],
  },
  season: {
    type: Sequelize.ENUM,
    values: ['winter', 'spring', 'summer', 'fall'],
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 100,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
})

module.exports = Grocery
