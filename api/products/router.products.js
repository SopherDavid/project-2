import express from 'express';
import productsController from './controller.products.js'

const router = express.Router()

// GET localhost:3000/api/users/
router.get('/', productsController.getAllProducts)

// GET localhost:3000/api/users/8
router.get('/:id', productsController.getProductsById)

// POST localhost:3000/api/users/
router.post('/', productsController.addProducts);



// PUT localhost:3000/api/users/
router.put('/:id', productsController.updateProducts)

// DELETE localhost:3000/api/users/
router.delete('/:id', productsController.deleteProducts)

export default router;