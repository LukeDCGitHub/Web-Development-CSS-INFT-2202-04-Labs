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

// Export views
module.exports = {
    allAnimalView,
    editAnimalView,
    entryFormView
}