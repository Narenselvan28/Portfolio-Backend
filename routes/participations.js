const express = require('express');
const router = express.Router();
const Participation = require('../models/Participation');

// Get all
router.get('/', async (req, res) => {
  try {
    const list = await Participation.find().sort({ date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post('/', async (req, res) => {
  const item = new Participation(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
