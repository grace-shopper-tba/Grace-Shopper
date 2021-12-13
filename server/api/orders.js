const router = require('express').Router();
const {
  models: { User, Order, OrderItem, Grocery }
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const order = await Order.findOne({
      where: { userId: userId, active: true },
    });

    const orderItems = await order.getOrderItems();
    res.send(orderItems);
  } catch(error) {
    console.log('Error in orders get route');
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { userId, groceryId, quantity, subtotal } = req.body;
    const response = await Order.findOrCreate({
      where: {userId: userId, active: true}
    });
    const order = response[0];

    await order.createOrderItem({
      groceryId: groceryId,
      quantity: quantity,
      subtotal: subtotal,
    })
    const orderItems = await order.getOrderItems();
    res.send(orderItems);
  } catch(error) {
     console.log('Error in orders post route');
     next(error);
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const itemId = req.body.itemId
    const deletedItem = await OrderItem.destroy({
      where: { id: itemId },
    })

    if (deletedItem) {
      res.send('Deleted item from order');
    } else {
      res.send('Item not found');
    }
  } catch(error) {
    console.log('Error in orders delete route');
    next(error);
  }
})


