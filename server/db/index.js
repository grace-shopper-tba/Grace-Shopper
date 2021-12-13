//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Grocery = require("./models/Grocery");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");

//associations could go here!

Grocery.hasMany(OrderItem);
OrderItem.belongsTo(Grocery);

OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Grocery,
    Order, 
    OrderItem
  },
};
