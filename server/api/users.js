const router = require('express').Router()
const {
  models: { User },
} = require('../db')
module.exports = router

// First checking if the request is an authorized request (made through our routes and not directly from the url bar)
const authorized = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      next()
    } else {
      throw new Error('Request not valid')
    }
  } catch (error) {
    next(error)
  }
}
// Checking that the user is an admin by finding that user and checking the isAdmin property
const isAdmin = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization
      const user = await User.findByToken(token)
      req.user = user
      if (!req.user.isAdmin) {
        throw new Error()
      }
    }
    next()
  } catch (error) {
    next(error)
  }
}

// "/api/users"
router.get('/', authorized, isAdmin, async (req, res, next) => {
  //if the request passes through both middlewares then we can send the data
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
