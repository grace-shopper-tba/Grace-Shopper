const router = require('express').Router()
const {
  models: { User, Order, OrderItem, Grocery },
} = require('../db')
const { isAdmin, authorized } = require('./authMiddleware')
module.exports = router

router.get('/', authorized, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: OrderItem })
    res.status(200).send(orders)
  } catch (error) {
    console.log('Error in (all) orders get route')
    next(error)
  }
})

router.get('/:userId', authorized, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.params.userId },
      include: OrderItem
    })

    res.status(200).send(orders);
  } catch (error) {
    console.log('Error in orders get route')
    next(error)
  }
})

router.post('/', authorized, async (req, res, next) => {
  try {
    const { userId, groceryId, quantity, subtotal } = req.body
    const response = await Order.findOrCreate({
      where: { userId: userId, active: true },
    })
    const order = response[0]

    await order.createOrderItem({
      groceryId,
      quantity,
      subtotal,
    })

    res.send(await order.getOrderItems())
  } catch (error) {
    console.log('Error in orders post route')
    next(error)
  }
})

router.put('/:itemId', authorized, async (req, res, next) => {
  try {
    const itemId = req.params.itemId
    const item = await OrderItem.findByPk(itemId)
    if (item) {
      res.send(await item.update(req.body, { where: { id: itemId } }))
    } else {
      res.sendStatus(404)
    }
  } catch(error) {
    console.log('Error in orders put route')
    next(error)
  }
})

router.delete('/:itemId', authorized, async (req, res, next) => {
  try {
    const itemId = req.params.itemId
    const deletedItem = await OrderItem.destroy({
      where: { id: itemId },
    })

    if (deletedItem) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log('Error in orders delete route')
    next(error)
  }
})
