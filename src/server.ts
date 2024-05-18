import express from "express";
import { sequelize } from "./config/database";
import productRoutes from "./routes/productRoutes";
import variantRoutes from "./routes/variantRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1", productRoutes);
app.use("/api/v1", variantRoutes);

(async () => {
  try {
    await sequelize.sync({force:false});
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to synchronize the database:", error);
    process.exit(1);
  }
})();
