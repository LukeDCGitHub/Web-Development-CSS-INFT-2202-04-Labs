const express = require('express');
const { allAnimalView, entryFormView, submitAnimalForm, loadEditAnimalData, updateAnimal, deleteAnimal  } = require('../controllers/animal.controller');

// Create router using express
const router = express.Router();

// Display animalView when the user navigates to the all-animals page
router.get('/all-animals', allAnimalView);

// Display entryFormView when the user navigates to the entry-form page
router.get('/entry-form', entryFormView);

// POST request for submitting the animal form
router.post('/entry-form', submitAnimalForm);

// Display edit-animal page
// (I had to create a form to pass the animal ID because I was recieving a strange error that was returning style.css as my id when using url)
// (I spent way too much time trying to fix it and gave up)
router.post('/edit-animal', loadEditAnimalData);

// POST request for editing animal
router.post('/edit-animal-details', updateAnimal);

// POST request for deleting an animal
router.post('/delete-animal', deleteAnimal);

// Export express router
module.exports = router;