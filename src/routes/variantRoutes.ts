import { Router } from 'express';
import { VariantController } from '../controllers/VariantController';

const router = Router();
const variantController = new VariantController();
router.post('/products/:productId/variants', (req, res) => variantController.addVariant(req, res));
router.delete('/products/:productId/variants/:variantId', (req, res) => variantController.removeVariant(req, res));


export default router;
