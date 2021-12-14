const {
  models: { User },
} = require('../db')
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
// Checking that the user exists in our db
const isUser = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization
      const user = await User.findByToken(token)
      req.user = user
      next()
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
module.exports = {
  authorized,
  isAdmin,
  isUser,
}
