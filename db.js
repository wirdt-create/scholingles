const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(() => console.log("✅ Conexión a PostgreSQL exitosa"))
  .catch(err => console.error("❌ Error al conectar a PostgreSQL:", err));

module.exports = pool;
