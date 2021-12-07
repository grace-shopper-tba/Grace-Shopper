const Sequelize = require("sequelize");
const db = require("../db");

const Grocery = db.define("grocery", {
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
    values: ["fruit", "vegetable"],
  },
  season: {
    type: Sequelize.ENUM,
    values: ["winter", "spring", "summer", "fall"],
  },
  //note that price may be returned as a string, if so, check the below example at https://github.com/sequelize/sequelize/issues/8019#:~:text=some%20extra%20sugar%20on%20this
  // sequelize.define("user", {
  //   foo: {
  //     type: Sequelize.DECIMAL,
  //     get() {
  //       // Workaround until sequelize issue #8019 is fixed
  //       const value = this.getDataValue('foo');
  //       return value === null ? null : parseFloat(value);
  //     }
  //   }
  // });

  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
});

module.exports = Grocery;
