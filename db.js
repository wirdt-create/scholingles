require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Render necesita SSL habilitado
  },
});

pool.connect()
  .then(() => console.log("✅ Conectado correctamente a PostgreSQL"))
  .catch(err => console.error("❌ Error al conectar a PostgreSQL:", err));

module.exports = pool;
