const router = require('express').Router()
const topProductController = require('../controllers/topProductController')

router.get('/top_products', topProductController.getTopProducts)

module.exports = router