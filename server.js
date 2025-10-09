const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// 📁 Servir el frontend (archivos estáticos)
app.use(express.static(path.join(__dirname, "public")));

// 🧠 Ruta API para probar base de datos
app.get("/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ mensaje: "API funcionando 🚀", fecha: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en la conexión a la base de datos" });
  }
});

// 🏠 Cualquier ruta no encontrada → index.html (por si es SPA o HTML normal)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ⚙️ Puerto Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
