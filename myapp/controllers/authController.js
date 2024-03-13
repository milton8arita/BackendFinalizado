const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Usuario = require('../model/usuariomodel');

router.post('/autenti', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar user
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    let redirectPath = '';
    if (usuario.roles.includes('admin')) {
      redirectPath = '/administradores';
    } else if (usuario.roles.includes('user')) {
      redirectPath = '/inicio';
    }

    // Generar un token de 
    const token = jwt.sign(
      { usuarioId: usuario._id, email: usuario.email, redirectPath },
      '12345678', 
      { expiresIn: '1h' } 
    );

    // Devolver el token 
    res.status(200).json({ token, redirectPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
