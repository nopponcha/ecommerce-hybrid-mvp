const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  await pool.query(
    'INSERT INTO users (email, password) VALUES ($1, $2)',
    [email, hashed]
  );

  res.status(201).json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (!result.rows.length) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
};
