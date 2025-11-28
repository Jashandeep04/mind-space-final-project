const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');


// 1) GET all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// 2) GET entries by mood  
// Example: /api/entries/mood/happy
router.get('/mood/:mood', async (req, res) => {
  try {
    const mood = req.params.mood;
    const entries = await Entry.find({ mood }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// 3) GET mood stats 
// Example: /api/entries/stats/moods
router.get('/stats/moods', async (req, res) => {
  try {
    const entries = await Entry.find();

    const moodCounts = entries.reduce((acc, e) => {
      acc[e.mood] = (acc[e.mood] || 0) + 1;
      return acc;
    }, {});

    res.json(moodCounts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// 4) GET single entry by ID
router.get('/:id', async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ msg: 'Entry not found' });

    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// POST create entry
router.post('/', async (req, res) => {
  try {
    const { title, note, mood, date } = req.body;

    if (!title || !mood) {
      return res.status(400).json({ msg: 'Title and mood are required' });
    }

    const newEntry = new Entry({
      title,
      note,
      mood,
      date: date || Date.now(),
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// DELETE entry
router.delete('/:id', async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ msg: 'Entry not found' });
    }

    await entry.deleteOne();
    res.json({ msg: 'Entry deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
