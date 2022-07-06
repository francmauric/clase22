// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', (productsController.index)); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/product', (req,res)=>{
    res.send("crear producto")
}); 


//productsController.create
//router.???('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 
router.get('/detail/:id', productsController.detail);


/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/product-edit-form/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 

//
module.exports = router;
