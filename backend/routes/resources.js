const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// GET /api/resources  -> all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: 1 });
    res.status(200).json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET /api/resources/:id  -> single resource
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ msg: 'Resource not found' });
    }
    res.status(200).json(resource);
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: 'Invalid resource id' });
  }
});

// POST /api/resources 
router.post('/', async (req, res) => {
  try {
    const { title, url, description, category } = req.body;

    if (!title || !url) {
      return res.status(400).json({ msg: 'Title and URL are required' });
    }

    const newResource = await Resource.create({
      title,
      url,
      description,
      category,
    });

    res.status(201).json(newResource);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
