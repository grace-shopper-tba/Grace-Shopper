const router = require('express').Router()
const Grocery = require('../db/models/Grocery')
const { authorized, isAdmin } = require('./authMiddleware')

router.get('/', async (req, res, next) => {
  try {
    const products = await Grocery.findAll()
    res.send(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Grocery.findByPk(req.params.productId)
    res.send(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', authorized, isAdmin, async (req, res, next) => {
  try {
    res.send(await Grocery.create(req.body))
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', authorized, isAdmin, async (req, res, next) => {
  try {
    const product = await Grocery.findByPk(req.params.productId)
    res.send(await product.update(req.body))
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId', authorized, isAdmin, async (req, res, next) => {
  try {
    const product = await Grocery.findByPk(req.params.productId)
    await product.destroy()
    res.send() //tentative
  } catch (err) {
    next(err)
  }
})

module.exports = router
