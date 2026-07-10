module.exports = {
  CREATE_PRODUCT: `
    INSERT INTO products (
      name,
      description,
      price,
      stock,
      is_active
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, description, price, stock, is_active;
  `,

  GET_PRODUCT_BY_ID: `
    SELECT id, name, description, price, stock, is_active, created_at
    FROM products
    WHERE id = $1;
  `,

  GET_ALL_PRODUCTS: `
    SELECT id, name, description, price, stock, is_active, created_at
    FROM products;
  `,

  GET_PRODUCT_BY_NAME: `
    SELECT id, name, description, price, stock, is_active, created_at
    FROM products
    WHERE name = $1;
  `,

  UPDATE_PRODUCT: `
    UPDATE products
    SET name = $1, description = $2, price = $3, stock = $4, is_active = $5, updated_at = NOW()
    WHERE id = $6
    RETURNING id, name, description, price, stock, is_active;
  `,

  UPDATE_MANY_PRODUCTS: `
    UPDATE products
    SET name = $1, description = $2, price = $3, stock = $4, is_active = $5, updated_at = NOW()
    WHERE id = ANY($6::int[])
    RETURNING id, name, description, price, stock, is_active;
  `,

  DELETE_PRODUCT: `
    DELETE FROM products
    WHERE id = $1
    RETURNING id, name, description, price, stock, is_active;
  `,

  DELETE_MANY_PRODUCTS: `
    DELETE FROM products
    RETURNING *;
  `,
};
