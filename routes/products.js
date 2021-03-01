
const express = require('express')

const router = express.Router()


//Protected Route intialization
const { protect,authorize } = require('../middleware/auth')

//PRODUCTS CONTROLLER
const { getProducts, createProduct, getSingleProduct, deleteSingleProduct, updateProduct,getSingleVendorProducts } =
 require('../controller/Products')


// const bootcamps= require('./routes/devcamp')

const app = express()

//Mount routers
// app.use('./api/v1/bootcamps',bootcamps)


//PRODUCT APIS
router.route('/AddProduct').post(protect,authorize('vendor'),createProduct)
router.route('/Products').get(getProducts)
router.route('/Product/:id').get(protect,getSingleProduct).delete(protect,deleteSingleProduct).put(protect,updateProduct)
router.route('/vendorProducts').get(protect,getSingleVendorProducts)


module.exports = router