'use strict'

const {
  db,
  models: { User, Grocery },
} = require('../server/db')
const groceries = require('./groceries')
// const groceryList = require('./groceries')

const faker = require('faker')
const axios = require('axios')

// const dotenv = require('dotenv').config()
// const { createClient } = require('pexels')
// const key = process.env.pexelKey
// const client = createClient(key)

// for demo --
// async function test() {
//   try {
//     const query = 'potato'
//     let { photos } = await client.photos.search({ query, per_page: 1 })
//     console.log('query search', photos[0].src.medium)
//     // console.log(photos[0].url)
//   } catch (error) {
//     console.log(error)
//   }
// }
// test()

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  //creating groceries
  // let groceries = []

  // for (let i = 0; i < groceryList.length; i++) {
  //   let name = groceryList[i]
  //   let type = faker.random.arrayElement(['fruit', 'vegetable'])
  //   let season = faker.random.arrayElement([
  //     'winter',
  //     'spring',
  //     'summer',
  //     'fall',
  //   ])
  //   let price = faker.datatype.float({ min: 1.0, max: 50, precision: 0.01 })
  //   let { photos } = await client.photos.search({ query: name, per_page: 1 })
  //   let imageUrl = photos[0]
  //     ? photos[0].src.medium
  // ? photos[0].src.medium
  // : photos[0].src.original
  //     : 'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  //   console.log(imageUrl)
  //   // let imageUrl = faker.image.imageUrl()

  //   groceries.push({
  //     name,
  //     type,
  //     season,
  //     price,
  //     imageUrl,
  //   })
  // }

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

  // const users = await Promise.all([
  //   User.create({ firstName: 'cody', email: "cody@example.com", password: "123" }),
  //   User.create({ firstName: 'murphy', email: "murphy@example.com", password: "123" }),
  // ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${groceries.length} groceries`)
  console.log(`seeded successfully`)
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
