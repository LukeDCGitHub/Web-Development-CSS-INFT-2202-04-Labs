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

            // Redirect to all animals page after submission
            res.redirect('/all-animals');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error saving data to database');
        });
}

/**
 * Load edit animal page data
 * @param {*} req 
 * @param {*} res 
 */
function loadEditAnimalData(req, res) {
    const animalId = req.body.id;
    console.log("Received animalId:", animalId);
    
    // Find an animal by id and pass it to the page
    animalModel.Animal.findById(animalId)
        .then(animal => {
            if (!animal) {
                return res.status(404).send('Animal not found');
            }

            res.render('./animals/edit-animal', {
                pageTitle: 'Edit Animal',
                animal: animal
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching animal data');
        });
}

/**
 * Update animal data
 * @param {*} req 
 * @param {*} res 
 */
function updateAnimal(req, res) {
    // Create an animal using data passed from form
    const animalId = req.body._id;
    const updatedAnimal = {
        zoo: req.body.zoo,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        isTransportable: req.body.isTransportable === 'true', // Convert to boolean
    };

    // Find the animal by id and update it with the new animal 
    animalModel.Animal.findByIdAndUpdate(animalId, updatedAnimal, { new: true })
        .then((updatedDoc) => {
            if (!updatedDoc) {
                return res.status(404).send('Animal not found');
            }
            console.log('Updated animal:', updatedDoc);
            res.redirect('/all-animals');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating animal');
        });
}

/**
 * Delete animal data
 * @param {*} req 
 * @param {*} res 
 */
function deleteAnimal(req, res) {
    const animalId = req.body._id;

    // Delete the animal from the database
    animalModel.Animal.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted animal with ID:", animalId);

            // Redirect to all animals page after delete
            res.redirect('/all-animals');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting animal');
        });
}


// Export views
module.exports = {
    allAnimalView,
    entryFormView,
    submitAnimalForm,
    loadEditAnimalData,
    updateAnimal,
    deleteAnimal
}