const { Pool } = require("pg");
const config = require("./env");

const pool = new Pool({
  connectionString: config.connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

(async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("✅ PostgreSQL Connected");
  } catch (err) {
    console.error("❌ Database Connection Failed");
    console.error(err.message);
  }
})();

module.exports = pool;