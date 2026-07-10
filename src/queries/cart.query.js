module.exports = {
  CREATE_CART: `
    INSERT INTO cart (
      user_id,
      product_id,
      quantity
    )
    VALUES ($1, $2, $3)
    RETURNING id, user_id, product_id, quantity;
  `,

  GET_CART_BY_ID: `
    SELECT id, user_id, product_id, quantity, created_at
    FROM cart
    WHERE id = $1;
  `,

  GET_ALL_CARTS: `
    SELECT id, user_id, product_id, quantity, created_at
    FROM cart;
  `,

  GET_CART_BY_USER_ID: `
    SELECT id, user_id, product_id, quantity, created_at
    FROM cart
    WHERE user_id = $1;
  `,

  UPDATE_CART: `
    UPDATE cart
    SET user_id = $1, product_id = $2, quantity = $3, updated_at = NOW()
    WHERE id = $4
    RETURNING id, user_id, product_id, quantity;
  `,

  UPDATE_MANY_CARTS: `
    UPDATE cart
    SET user_id = $1, product_id = $2, quantity = $3, updated_at = NOW()
    WHERE id = ANY($4::int[])
    RETURNING id, user_id, product_id, quantity;
  `,

  DELETE_CART: `
    DELETE FROM cart
    WHERE id = $1
    RETURNING id, user_id, product_id, quantity;
  `,

  DELETE_MANY_CARTS: `
    DELETE FROM cart
    RETURNING *;
  `,
};
