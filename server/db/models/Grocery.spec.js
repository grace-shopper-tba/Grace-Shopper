const { expect } = require("chai");
const {
  db,
  models: { Grocery },
} = require("../index");
const seed = require("../../../script/seed");

describe("Grocery model", () => {
  let groceriesTest;
  beforeEach(async () => {
    groceriesTest = (await seed()).groceries;
  });

  console.log("grocery test specs here -->", groceriesTest);
});
