const animalModel = require('../models/Animal');

/**
 * Load animal data to the all-animals page
 * @param {*} req 
 * @param {*} res 
 */
function loadAnimalData(req, res) {
    animalModel.Animal.find({}).then(function(animalList) {
        res.render('./animals/all-animals', {
            pageTitle: 'All Animals',
            animals: animalList
        })
    })
}

/**
 * Load edit animal page data
 * @param {*} req 
 * @param {*} res 
 */
function loadEditAnimalData(req, res) {
        res.render('./animals/edit-animal', {
            pageTitle: 'Edit Animals'
        })
    }

/**
 * Load animal animal entry form to entry-form page
 * @param {*} req 
 * @param {*} res 
 */
function loadAnimalEntryForm(req, res) {
    res.render('./animals/entry-form', {
        pageTitle: 'Animal Entry Form'
    })
}

/**
 * Display all-animals page
 * @param {*} req 
 * @param {*} res 
 */
function allAnimalView(req, res) {
    loadAnimalData(req, res);
}

/**
 * Display edit-animal page
 * @param {*} req 
 * @param {*} res 
 */
function editAnimalView(req, res) {
    loadEditAnimalData(req, res);
}

/**
 * Display entry-form page
 * @param {*} req 
 * @param {*} res 
 */
function entryFormView(req, res) {
    loadAnimalEntryForm(req, res);
}

/**
 * Submit animal form data
 * @param {*} req 
 * @param {*} res 
 */
function submitAnimalForm(req, res) {
    console.log(req.body);
    const formData = req.body;

    console.log('Form Data:', formData);

    // Create a new Animal document
    const newAnimal = new animalModel.Animal({
        zoo: formData.zoo,
        scientificName: formData.scientificName,
        commonName: formData.commonName,
        givenName: formData.givenName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        age: formData.age,
        isTransportable: formData.isTransportable === 'Available'
    });

    // Save the newAnimal to the database
    newAnimal.save()
        .then(() => {
            console.log('Animal data saved:', newAnimal);
            res.redirect('/all-animals'); // Redirect to all animals page after submission
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error saving data to database');
        });
}

// Export views
module.exports = {
    allAnimalView,
    editAnimalView,
    entryFormView,
    submitAnimalForm
}