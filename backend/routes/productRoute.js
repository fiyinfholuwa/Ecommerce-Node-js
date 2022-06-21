const express = require('express');
const { getAllproduct, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');

const router = express.Router();
// get all product 
router.route('/products').get(getAllproduct);

// create new product 
router.route('/product/create').post(createProduct);

// update product 
router.route('/product/:id').get(updateProduct);

// delete Product 
router.route('/product/:id').delete(deleteProduct);

// single product 
router.route('/product/:id').get(getSingleProduct);
module.exports  = router;