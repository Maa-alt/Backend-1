// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection

// Get all products
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add a new product
router.post('/', (req, res) => {
  const { name, description, category, price, quantity } = req.body;
  db.query(
    'INSERT INTO products (name, description, category, price, quantity) VALUES (?, ?, ?, ?, ?)',
    [name, description, category, price, quantity],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: result.insertId, name, description, category, price, quantity });
    }
  );
});

// Delete a product by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;
