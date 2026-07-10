# PostgreSQL CRUD Application

A production-ready Node.js REST API with comprehensive error handling, input validation, and PostgreSQL database integration for managing users, products, and shopping carts.

## ✨ Features

- ✅ **Full CRUD Operations** for Users, Products, and Cart items
- ✅ **Comprehensive Input Validation** using express-validator
- ✅ **Robust Error Handling** with custom error middleware
- ✅ **PostgreSQL Integration** with proper constraint handling
- ✅ **Database Migrations** using Knex.js
- ✅ **Password Hashing** with bcrypt
- ✅ **RESTful API** design with proper HTTP status codes
- ✅ **Consistent Response Format** across all endpoints
- ✅ **Field-Level Validation Errors** with detailed messages
- ✅ **Development Mode Logging** for debugging

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 18+ | JavaScript runtime |
| Express.js | ^5.2.1 | Web framework |
| PostgreSQL | 13+ | Database |
| Knex.js | ^3.3.0 | Query builder & migrations |
| express-validator | ^7.0.0 | Input validation |
| bcrypt | ^6.0.0 | Password hashing |
| dotenv | ^17.4.2 | Environment variables |
| nodemon | ^3.1.14 | Development auto-reload |
| pg | ^8.22.0 | PostgreSQL client |

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

### Steps

1. **Clone/Download the repository**
   ```bash
   cd "Basic CRUD _postgresql"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=postgres_crud_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```

4. **Setup PostgreSQL Database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres

   # Create database
   CREATE DATABASE postgres_crud_db;

   # Exit
   \q
   ```

5. **Run Database Migrations**
   ```bash
   npm run migrate
   ```

6. **Start the server**
   ```bash
   npm start
   ```

   Server will run on: `http://localhost:3000`

---

## 📁 Project Structure

```
Basic CRUD _postgresql/
├── database/
│   └── migrations/              # Database migration files
│       ├── 20260709083837_create_users.js
│       ├── 20260709083842_create_products.js
│       ├── 20260709083846_create_cart.js
│       ├── 20260709084234_add_mobile_to_users.js
│       └── 20260709085816_add.js
├── src/
│   ├── app.js                   # Express app setup & middleware
│   ├── config/
│   │   ├── db.js                # Database connection pool
│   │   └── env.js               # Environment variable loader
│   ├── controllers/             # Request handlers
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   └── cart.controller.js
│   ├── middlewares/             # Express middlewares
│   │   ├── error.middleware.js  # Global error handler
│   │   └── validationError.middleware.js
│   ├── queries/                 # SQL query strings
│   │   ├── user.query.js
│   │   ├── product.query.js
│   │   └── cart.query.js
│   ├── routes/                  # API routes
│   │   ├── user.routes.js
│   │   ├── product.routes.js
│   │   └── cart.routes.js
│   ├── services/                # Business logic
│   │   ├── user.service.js
│   │   ├── product.service.js
│   │   └── cart.service.js
│   ├── utils/
│   │   └── errorHandler.js      # Custom error class
│   └── validations/             # Input validation schemas
│       ├── user.validations.js
│       ├── product.validations.js
│       └── cart.validations.js
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example environment file
├── .gitignore                   # Git ignore rules
├── knexfile.js                  # Knex configuration
├── package.json                 # Project dependencies
├── package-lock.json
├── README.md                    # This file
└── ERROR_HANDLING_VALIDATION_GUIDE.md  # Detailed error handling docs
```

---

## 🚀 Running the Application

### Development Mode (with auto-reload)
```bash
npm start
```

### Production Mode
```bash
NODE_ENV=production node src/app.js
```

---

## 📚 API Endpoints

### Base URL
```
http://localhost:3000
```

### Users API

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/users` | Create a new user | 201 |
| GET | `/users` | Get all users | 200 |
| GET | `/users/:id` | Get user by ID | 200 |
| GET | `/users/name/:name` | Get users by name | 200 |
| PUT | `/users/:id` | Update user by ID | 200 |
| PUT | `/users/update-many` | Update multiple users | 200 |
| DELETE | `/users/:id` | Delete user by ID | 200 |
| DELETE | `/users/delete-many` | Delete all users | 200 |

### Products API

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/products` | Create a new product | 201 |
| GET | `/products` | Get all products | 200 |
| GET | `/products/:id` | Get product by ID | 200 |
| GET | `/products/name/:name` | Get products by name | 200 |
| PUT | `/products/:id` | Update product by ID | 200 |
| PUT | `/products/update-many` | Update multiple products | 200 |
| DELETE | `/products/:id` | Delete product by ID | 200 |
| DELETE | `/products/delete-many` | Delete all products | 200 |

### Cart API

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/cart` | Add item to cart | 201 |
| GET | `/cart` | Get all cart items | 200 |
| GET | `/cart/:id` | Get cart item by ID | 200 |
| GET | `/cart/user/:userId` | Get cart items for user | 200 |
| PUT | `/cart/:id` | Update cart item | 200 |
| PUT | `/cart/update-many` | Update multiple cart items | 200 |
| DELETE | `/cart/:id` | Remove item from cart | 200 |
| DELETE | `/cart/delete-many` | Clear all cart items | 200 |

---

## 📋 Request/Response Examples

### 1. Create User

**Request:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "mobile": "9876543210",
    "is_active": true
  }'
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "is_active": true,
    "created_at": "2026-07-10T10:30:00Z"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "mobile",
      "message": "Mobile number must be exactly 10 digits"
    }
  ]
}
```

---

### 2. Get User by ID

**Request:**
```bash
curl http://localhost:3000/users/1
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "is_active": true
  }
}
```

**Not Found Response (404):**
```json
{
  "success": false,
  "message": "User not found"
}
```

---

### 3. Update User

**Request:**
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "mobile": "9876543211"
  }'
```

**Response (200):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "name": "Jane Doe",
    "email": "john@example.com",
    "mobile": "9876543211",
    "is_active": true
  }
}
```

---

### 4. Create Product

**Request:**
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "quantity": 50,
    "category": "Electronics"
  }'
```

**Response (201):**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": 1,
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "quantity": 50,
    "category": "Electronics"
  }
}
```

---

### 5. Add to Cart

**Request:**
```bash
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "product_id": 1,
    "quantity": 2
  }'
```

**Response (201):**
```json
{
  "success": true,
  "message": "Cart created successfully",
  "data": {
    "id": 1,
    "user_id": 1,
    "product_id": 1,
    "quantity": 2
  }
}
```

---

## 🔐 Validation Rules

### User Validation
- **name**: 2-100 characters, required
- **email**: Valid email format, required, unique
- **password**: Minimum 6 characters, required
- **mobile**: Exactly 10 digits, required, unique
- **is_active**: Boolean, optional

### Product Validation
- **name**: 2-150 characters, required
- **description**: Maximum 500 characters, optional
- **price**: Positive number (min 0.01), required
- **quantity**: Non-negative integer, required
- **category**: 2-100 characters, optional

### Cart Validation
- **user_id**: Valid integer ID, required
- **product_id**: Valid integer ID, required
- **quantity**: Minimum 1, required

For detailed validation information, see [ERROR_HANDLING_VALIDATION_GUIDE.md](./ERROR_HANDLING_VALIDATION_GUIDE.md)

---

## 🛡️ Error Handling

The application implements comprehensive error handling:

### HTTP Status Codes
- **200**: Success
- **201**: Resource created
- **400**: Bad request / Validation error
- **404**: Resource not found
- **409**: Conflict (e.g., duplicate email)
- **500**: Internal server error

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "errors": []  // Only for validation errors
}
```

### Database Constraint Handling
- Duplicate emails/unique fields → 409 Conflict
- Foreign key violations → 400 Bad Request
- Missing required fields → 400 Bad Request
- Invalid data types → 400 Bad Request

For comprehensive error handling documentation, see [ERROR_HANDLING_VALIDATION_GUIDE.md](./ERROR_HANDLING_VALIDATION_GUIDE.md)

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres_crud_db
DB_USER=postgres
DB_PASSWORD=your_secure_password
```

### Database Connection

Database configuration is in `src/config/db.js` using pg pool for connection pooling.

### Knex Configuration

Migrations are configured in `knexfile.js` for database version control.

---

## 📝 Scripts

```bash
# Start development server with auto-reload
npm start

# Run database migrations
npm run migrate

# Production start (manual)
NODE_ENV=production node src/app.js
```

---

## 🔑 Key Implementation Details

### Architecture Pattern
- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic and database operations
- **Queries**: SQL query definitions
- **Validations**: Input validation rules
- **Middlewares**: Cross-cutting concerns (validation, errors)

### Error Handling Flow
1. Validation middleware catches input errors
2. Controllers wrap logic in try-catch
3. Errors are passed to next(error)
4. Global error middleware processes all errors
5. Consistent error response is sent to client

### Security Features
- Password hashing with bcrypt (salt rounds: 10)
- Input validation on all endpoints
- SQL injection prevention via parameterized queries
- Consistent error messages (no sensitive info exposure)

---

## 🐛 Debugging

### Development Mode
Set `NODE_ENV=development` in `.env` to see stack traces in error responses.

### Database Debugging
Enable PostgreSQL logging by uncommenting in `src/config/db.js` if needed.

### API Testing
Use tools like:
- **Postman**: Visual API testing
- **Insomnia**: REST client
- **curl**: Command line testing
- **VS Code Thunder Client**: Built-in REST client

---

## 📖 Documentation

- [Error Handling & Validation Guide](./ERROR_HANDLING_VALIDATION_GUIDE.md) - Detailed error handling and validation documentation

 

---

## 📄 License

ISC

---

## 👤 Author

Anantha Rajesh

---

## 📞 Support

For issues or questions, please check the [Error Handling & Validation Guide](./ERROR_HANDLING_VALIDATION_GUIDE.md) or review the code comments.

---

**Last Updated**: July 10, 2026
