/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError } from './lib/client-error.js';
import { errorMiddleware } from './lib/error-middleware.js';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      SELECT "productId",
            "name",
            "price",
            "imageUrl",
            "description"
        FROM "products"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      SELECT "productId",
            "name",
            "price",
            "imageUrl",
            "description",
            "ingredients"
      FROM "products"
      WHERE "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `Cannot find product with productId ${productId}`,
      );
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.get('/api/productImages/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      SELECT *
      FROM "productImages"
      WHERE "productId" = $1
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/cart', async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    // Check if the product already exists in the cart
    const checkIfExistsQuery = `
      SELECT * FROM "cart"
      WHERE "productId" = $1;
    `;
    const checkIfExistsParams = [productId];
    const checkIfExistsResult = await db.query(
      checkIfExistsQuery,
      checkIfExistsParams,
    );

    if (checkIfExistsResult.rows.length > 0) {
      // If the product exists, update its quantity
      const updateQuantityQuery = `
        UPDATE "cart"
        SET "quantity" = "quantity" + $1
        WHERE "productId" = $2
        RETURNING *;
      `;
      const updateQuantityParams = [quantity, productId];
      const updateQuantityResult = await db.query(
        updateQuantityQuery,
        updateQuantityParams,
      );
      const updatedCart = updateQuantityResult.rows[0];
      res.json(updatedCart);
    } else {
      // If the product doesn't exist, insert it into the cart
      const insertProductQuery = `
        INSERT INTO "cart" ("quantity", "productId")
        VALUES ($1, $2)
        RETURNING *;
      `;
      const insertProductParams = [quantity, productId];
      const insertProductResult = await db.query(
        insertProductQuery,
        insertProductParams,
      );
      const newCartItem = insertProductResult.rows[0];
      res.json(newCartItem);
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/cart', async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    // Check if the product already exists in the cart
    const checkProduct = await db.query(
      'SELECT * FROM cart WHERE productId = $1',
      [productId],
    );

    if (checkProduct.rows.length > 0) {
      // If the product exists, update the quantity
      await db.query(
        'UPDATE cart SET quantity = quantity + $1 WHERE productId = $2',
        [quantity, productId],
      );
    } else {
      // If the product doesn't exist, insert it into the cart
      await db.query('INSERT INTO cart (productId, quantity) VALUES ($1, $2)', [
        productId,
        quantity,
      ]);
    }

    // Fetch the updated or inserted cart item
    const updatedCart = await db.query(
      'SELECT * FROM cart WHERE productId = $1',
      [productId],
    );
    const cart = updatedCart.rows[0];

    res.json(cart);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cart', async (req, res, next) => {
  try {
    const sql = `
    SELECT
    "productId",
    "quantity",
    "name",
    "imageUrl",
    "price",
    "cartId"
    FROM "cart"
    JOIN "products" using ("productId")
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/cart/:cartId', async (req, res, next) => {
  try {
    const cartId = req.params.cartId;

    const sql = `
    DELETE
    FROM "cart"
    WHERE "cartId" = $1
    RETURNING *;
    `;
    const params = [cartId];
    const result = await db.query(sql, params);
    const cart = result.rows[0];

    if (!cart) {
      throw new ClientError(404, `Cannot find cart with "cartId" ${cartId}`);
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

app.put('/api/cart/:cartId', async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const sql = `
    UPDATE "cart"
    SET "quantity" = $1
    WHERE "cartId" = $2
    RETURNING *;
    `;

    const params = [req.body.quantity, cartId];
    const result = await db.query(sql, params);
    const cart = result.rows[0];

    res.json(cart);
  } catch (err) {
    next(err);
  }
});

app.post('/api/favorites', async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const checkProduct = await db.query(
      'SELECT * FROM "favorites" WHERE "productId" = $1',
      [productId],
    );
    if (checkProduct.rows.length === 0) {
      const result = await db.query(
        `INSERT INTO
        "favorites" ("productId")
        VALUES ($1)
        RETURNING *;`,
        [productId],
      );
      const favorites = result.rows[0];
      res.json(favorites);
    } else {
      res.json(checkProduct.rows[0]);
    }
  } catch (err) {
    next(err);
  }
});

app.get('/api/favorites', async (req, res, next) => {
  try {
    const sql = `
    SELECT
    "productId",
    "name",
    "imageUrl",
    "price",
    "favoritesId"
    FROM "favorites"
    JOIN "products" using ("productId")
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
