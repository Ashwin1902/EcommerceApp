const express = require('express');
const { getAllProducts, getProductById } = require('../controller/controller');
const router=express.Router();

router.get('/allProducts',getAllProducts);
router.get('/:id',getProductById);

module.exports=router;