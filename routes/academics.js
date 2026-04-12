const express = require('express');
const router = express.Router();
const Academic = require('../models/Academic');

// Get all
router.get('/', async (req, res) => {
  try {
    const academics = await Academic.find().sort({ endYear: -1 });
    res.json(academics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create (Admin only)
router.post('/', async (req, res) => {
  const academic = new Academic(req.body);
  try {
    const newAcademic = await academic.save();
    res.status(201).json(newAcademic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
