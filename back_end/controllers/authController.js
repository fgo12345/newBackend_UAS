require('dotenv').config()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const db = require('../config/db');

const SECRET_KEY = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    UserModel.findByUsername(username, async (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      if (results.length > 0) return res.status(400).json({ message: "Email sudah terdaftar!" });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      UserModel.create(username, hashedPassword, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        const token = jwt.sign({ id: result.insertId, username }, SECRET_KEY, { expiresIn: '2h' });
        res.json({ message: "Registrasi berhasil!", token: token });
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan." });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;
  
  UserModel.findByUsername(username, async (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length === 0) return res.status(401).json({ message: "username atau password salah!" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) return res.status(401).json({ message: "Email atau password salah!" });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '2h' });
    res.json({ message: "Login berhasil!", token: token, username: user.username });
  });
};

const getUsers = (req, res) => {
  
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Unauthorized: User not found' });
  }

  const query = 'SELECT id, username FROM users WHERE id != ?';
  
  db.query(query, [req.user.id], (err, results) => {
    if (err) {
      console.error("SQL ERROR:", err);
      return res.status(500).json({ error: 'Database error', message: err.message });
    }
    res.status(200).json(results);
  });
};

module.exports = { register, login , getUsers};