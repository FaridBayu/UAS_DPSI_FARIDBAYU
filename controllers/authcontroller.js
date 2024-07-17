// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminmodel');
const { jwtSecret, jwtExpiresIn } = require('../firebase');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = await Admin.getByUsername(username);
  if (existingAdmin) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = await Admin.create(username, hashedPassword);
  res.status(201).json(newAdmin);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.getByUsername(username);
  if (!admin) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: admin.id, role: 'admin' }, jwtSecret, { expiresIn: jwtExpiresIn });
  res.json({ token });
};
