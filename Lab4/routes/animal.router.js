const express = require('express');
const { allAnimalView, editAnimalView, entryFormView, submitAnimalForm } = require('../controllers/animal.controller');

// Create router using express
const router = express.Router();

// Display animalView when the user navigates to the all-animals page
router.get('/all-animals', allAnimalView);

// Display editAnimalView when the user navigates to the edit-animals page
router.get('/edit-animals', editAnimalView);

// Display entryFormView when the user navigates to the entry-form page
router.get('/entry-form', entryFormView);

// POST request for submitting the animal form
router.post('/entry-form', submitAnimalForm);

// Export express router
module.exports = router;