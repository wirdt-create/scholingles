// models/Usuario.js
const pool = require("../db");

const Usuario = {
  async obtenerTodos() {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows;
  },

  async crear(nombre, email, contraseña, id_rol) {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, contraseña, id_rol) VALUES ($1, $2, $3, $4) RETURNING *",
      [nombre, email, contraseña, id_rol]
    );
    return result.rows[0];
  },
};

module.exports = Usuario;
