// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ mensaje: "API funcionando 🚀", fecha: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: "Error de conexión a la base de datos" });
  }
});

// Importar rutas
const usuarioRoutes = require("./routes/usuarios");
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT} 🔥`));

