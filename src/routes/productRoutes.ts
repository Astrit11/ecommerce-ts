import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.get('/products', (req, res) => productController.findAll(req, res));
router.get('/products/:id', (req, res) => productController.findOne(req, res));
router.post('/products', (req, res) => productController.create(req, res));
router.put('/products/:id', (req, res) => productController.update(req, res));
router.delete('/products/:id', (req, res) => productController.remove(req, res));

export default router;
