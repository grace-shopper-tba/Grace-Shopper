'use strict'

const {
  db,
  models: { User, Grocery },
} = require('../server/db')
const groceries = require('./groceryData.json')

const faker = require('faker')
const axios = require('axios')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //creating groceries

  for (let i = 0; i < groceries.length; i++) {
    groceries[i].price = faker.datatype.number({
      min: 100,
      max: 5000,
      precision: 25,
    })
  }

  await Grocery.bulkCreate(groceries)

  // Creating Users
  let users = []
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.exampleEmail(firstName, lastName)
    let password = faker.internet.password(10, true)
    let phoneNumber = faker.phone.phoneNumber('###########')
    let state = faker.address.stateAbbr()
    let address = `${faker.address.streetAddress(
      true
    )}, ${faker.address.city()}, ${state}, ${faker.address.zipCodeByState(
      state
    )}`
    let isAdmin = faker.datatype.boolean()

    users.push({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      state,
      address,
      isAdmin,
    })
  }

  await User.bulkCreate(users)

  await Promise.all([
    User.create({
      firstName: 'hello',
      email: 'hello@example.com',
      password: '123',
    }),
    User.create({
      firstName: 'world',
      email: 'world@example.com',
      password: '123',
      isAdmin: true,
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${groceries.length} groceries`)
  console.log(`seeded successfully`)

  const testUser = await User.findByPk(101)
  const createOrder = await testUser.createOrder()
  await createOrder.createOrderItem({
    groceryId: 1,
    quantity: 3,
    subtotal: 18,
  })
  // const setGrocery = await addOrderItem.setGrocery(1)

  return {
    users,
    groceries,
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
