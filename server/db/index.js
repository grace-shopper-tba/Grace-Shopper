//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Grocery = require("./models/Grocery");
const Cart = require("./models/Cart");
const Order = require("./models/Order");

//associations could go here!
Order.belongsToMany(Grocery, { through: Cart });
Grocery.belongsToMany(Order, { through: Cart });

module.exports = {
  db,
  models: {
    User,
    Grocery,
    Cart,
    Order
  },
};
