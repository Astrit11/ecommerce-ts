# E-commerce Backend

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Astrit11/ecommerce-ts.git
    cd ecommerce-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the database connection in `src/config/database.ts` (currently by default it uses the Neon DB free db).

4. Start the application:
    ```bash
    npm start
    ```

## API Endpoints

### Products

- `GET /products` - Retrieve a list of products
- `GET /products/:id` - Retrieve a single product by ID
- `POST /products` - Create a new product
- `PUT /products/:id` - Update an existing product
- `DELETE /products/:id` - Remove a product

### Variants

- `POST /products/:productId/variants` - Add a variant to a specific product
- `DELETE /products/:productId/variants/:variantId` - Remove a variant from a specific product

## Sample API Calls

### Products

- **Create a product:**
    ```bash
    curl -X POST http://localhost:3000/api/v1/products -H "Content-Type: application/json" -d '{
      "name": "Product 1",
      "description": "Product description",
      "price": 10.99,
      "inventory": 100
    }'
    ```

- **Retrieve all products:**
    ```bash
    curl http://localhost:3000/api/v1/products
    ```

- **Retrieve a specific product:**
    ```bash
    curl http://localhost:3000/api/v1/products/1
    ```

- **Update a product:**
    ```bash
    curl -X PUT http://localhost:3000/api/v1/products/1 -H "Content-Type: application/json" -d '{
      "price": 12.99
    }'
    ```

- **Delete a product:**
    ```bash
    curl -X DELETE http://localhost:3000/api/v1/products/1
    ```

### Variants

- **Add a variant to a product:**
    ```bash
    curl -X POST http://localhost:3000/api/v1/products/1/variants -H "Content-Type: application/json" -d '{
      "name": "Variant 1",
      "size": "M",
      "color": "Red",
      "price": 9.99,
      "inventory": 50
    }'
    ```

- **Delete a variant:**
    ```bash
    curl -X DELETE http://localhost:3000/api/v1/products/1/variants/1
    ```

## ORM Integration

Sequelize simplifies database interactions by providing an abstracted API for handling database operations. It allows defining models, performing validations, and offers a rich set of methods to perform CRUD operations without writing raw SQL queries.
