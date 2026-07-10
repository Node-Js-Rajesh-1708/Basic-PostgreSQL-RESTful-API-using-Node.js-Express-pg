module.exports = {
  CREATE_USER: `
    INSERT INTO users (
      name,
      email,
      mobile,
      password,
      is_active
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, email, mobile, is_active;
  `,

  GET_USER_BY_ID: `
     SELECT id, name, email, mobile, is_active, created_at 
     FROM users 
     WHERE id = $1;
   `,

  GET_ALL_USERS: `
     SELECT id, name, email, mobile, is_active, created_at 
     FROM users;
   `,

  GET_USER_BY_NAME: `
   SELECT id, name, email, mobile, is_active, created_at 
   FROM users 
   WHERE name = $1;
   `,

  UPDATE_USER: `
   UPDATE users 
   SET name = $1, email = $2, mobile = $3, is_active = $4, updated_at = NOW() 
   WHERE id = $5 
   RETURNING id, name, email, mobile, is_active;
   `,

  UPDATE_MANY_USERS: `
   UPDATE users
   SET name = $1, email = $2, mobile = $3, is_active = $4, updated_at = NOW() 
   WHERE name = ANY($5::text[])
   RETURNING id, name, email, mobile, is_active;
   `,

  DELETE_USER: `
    DELETE FROM users
    WHERE id = $1
    RETURNING id, name, email, mobile, is_active;
    `,

  DELETE_MANY_USERS: `
   DELETE FROM users RETURNING *;
    `,
};
