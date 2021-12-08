const router = require('express').Router();
const Grocery = require('../db/models/Grocery');

router.get('/', async (req, res, next) => {
  try {
    const products = await Grocery.findAll();
    res.send(products);
  }
  catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Grocery.findByPk(req.params.productId);
    res.send(product);
  }
  catch (err) {
    next(err)
  }
})

module.exports = router;
