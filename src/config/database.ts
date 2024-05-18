import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';


export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'ep-crimson-recipe-a2d59x7o.eu-central-1.aws.neon.tech', 
  username: 'neondb_owner', 
  password: '8e9sHMYucXQZ', 
  database: 'neondb',
  logging:false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  models: [Product,Variant],
});