import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';

export class VariantController {
  async addVariant(req: Request, res: Response) {
    const productId = parseInt(req.params.productId);
    const product = await Product.findByPk(productId);
    if (product) {
      const variant = await Variant.create({ ...req.body, productId });
      res.json(variant);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }

  async removeVariant(req: Request, res: Response) {
    const productId = parseInt(req.params.productId);
    const variantId = parseInt(req.params.variantId);
    const variant = await Variant.findOne({
      where: { id: variantId, productId },
    });
    if (variant) {
      await variant.destroy();
      res.json({ message: "Variant removed" });
    } else {
      res.status(404).json({ message: "Variant not found" });
    }
  }
}
