import express from 'express';
import { sequelize } from './config/database';
import productRoutes from './routes/productRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/', productRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to synchronize the database:', err);
  });
