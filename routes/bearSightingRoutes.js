// DEPENDENCIES
// ================
const express = require('express');
const router = express.Router();
const bear_sightings_controller = require('../controllers/bear_sightings_controller');
// ================

// BEAR SIGHTING ROUTES
// ================
router.post('/sighting', bear_sightings_controller);
router.get('/sighting/search', bear_sightings_controller);
router.get('/sighting/search', bear_sightings_controller);
// ================
