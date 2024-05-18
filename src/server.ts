import express from 'express';
import { sequelize } from './config/database';
import productRoutes from './routes/productRoutes';
import variantRoutes from './routes/variantRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1', productRoutes);
app.use('/api/v1', variantRoutes);

// Sync database and start server
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to synchronize the database:', err);
  });
