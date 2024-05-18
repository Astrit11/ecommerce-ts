import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';

export class ProductController {
  async findAll(req: Request, res: Response) {
    const products = await Product.findAll({ include: [Variant] });
    res.json(products);
  }

  async findOne(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id, { include: [Variant] });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  async create(req: Request, res: Response) {
    const product = await Product.create(req.body, { include: [Variant] });
    res.json(product);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(req.body);
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  async remove(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
}
