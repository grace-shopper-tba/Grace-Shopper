const router = require('express').Router()
const {
  models: { User, Order, OrderItem, Grocery },
} = require('../db')
const { isAdmin, authorized, isUser } = require('./authMiddleware')
module.exports = router

router.get('/', authorized, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: OrderItem })
    res.status(200).send(orders)
  } catch (error) {
    console.error(error)
    next(error)
  }
})
//had to remove authorized and isUser for cart to work- need to implement security here due to user info returned
router.get('/:userId', authorized, isUser, async (req, res, next) => {
  try {
    if (+req.params.userId === req.user.id) {
      const orders = await Order.findAll({
        where: { userId: req.params.userId },
        include: [
          {
            model: OrderItem,
            include: Grocery,
          },
          {
            model: User,
            attributes: ['firstName', 'lastName', 'phoneNumber', 'address'],
          },
        ],
      })
      res.status(200).send(orders)
    } else {
      res.sendStatus(401)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { userId, groceryId, quantity, subtotal } = req.body
    // if (userId === req.user.id) {
    const order = await Order.findOne({
      where: { userId: userId, active: true },
    })
    const items = await order.getOrderItems()
    const exists = items.find((item) => item.groceryId === groceryId)
    if (exists) {
      let item = await OrderItem.findByPk(exists.id)
      item.quantity = item.quantity + quantity
      item.subtotal = item.subtotal + subtotal
      await item.save()
    } else {
      await order.createOrderItem({
        groceryId,
        quantity,
        subtotal,
      })
    }
    res.send(await order.getOrderItems())
    // }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.put('/:itemId', authorized, isUser, async (req, res, next) => {
  try {
    const itemId = req.params.itemId
    const orderItem = await OrderItem.findByPk(itemId, { include: Order })
    if (orderItem) {
      if (orderItem.order.userId === req.user.id) {
        res.send(await orderItem.update(req.body, { where: { id: itemId } }))
      } else {
        res.sendStatus(401)
      }
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.delete('/:itemId', authorized, isUser, async (req, res, next) => {
  try {
    const itemId = req.params.itemId
    const orderItem = await OrderItem.findByPk(itemId, { include: Order })
    if (orderItem) {
      if (orderItem.order.userId === req.user.id) {
        const deletedItem = await orderItem.destroy()
        res.sendStatus(204)
      } else {
        res.sendStatus(401)
      }
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})
