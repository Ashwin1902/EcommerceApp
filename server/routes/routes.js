const express = require('express');
const { getAllProducts, getProductById, signIn, signUp } = require('../controller/controller');
const router=express.Router();

router.get('/allProducts',getAllProducts);
router.get('/:id',getProductById);
router.post('/login',signIn)
router.post('/signup',signUp)
module.exports=router;