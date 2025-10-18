// models/Usuario.js
const pool = require("../db");

const Usuario = {
  async obtenerTodos() {
    const result = await pool.query("SELECT id, nombre, email, id_rol FROM usuarios");
    return result.rows;
  },

  async crear(nombre, email, password, id_rol = 2) {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, password, id_rol) VALUES ($1, $2, $3, $4) RETURNING id, nombre, email, id_rol",
      [nombre, email, password, id_rol]
    );
    return result.rows[0];
  },

  async obtenerPorEmail(email) {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    return result.rows[0];
  }
};

module.exports = Usuario;

