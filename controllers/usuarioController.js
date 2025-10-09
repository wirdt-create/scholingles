// controllers/usuarioController.js
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.obtenerTodos();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, email, contraseña, id_rol } = req.body;
    const hash = await bcrypt.hash(contraseña, 10);
    const nuevo = await Usuario.crear(nombre, email, hash, id_rol);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};
