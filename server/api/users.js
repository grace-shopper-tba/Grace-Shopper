const router = require('express').Router()
const {
  models: { User },
} = require('../db')
const { authorized, isAdmin } = require('./authMiddleware')
module.exports = router

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
