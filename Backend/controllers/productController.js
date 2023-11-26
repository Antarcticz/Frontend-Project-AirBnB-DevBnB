const router = require('express').Router();
const productModel = require('../models/productModel')

router.post('/', productModel.createNewProduct);

router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProductById);

router.put('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);

module.exports = router;