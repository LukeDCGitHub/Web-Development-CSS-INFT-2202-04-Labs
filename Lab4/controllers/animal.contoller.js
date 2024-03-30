const animalModel = require('../models/Animal');

/**
 * Load animal data to the all-animals page
 * @param {*} req 
 * @param {*} res 
 */
function loadAnimalData(req, res) {
    animalModel.User.find({}).then(function(animalList) {
        res.render('./pages/all-animals', {
            title: 'Animal List',
            animals: animalList
        })
    })
}

/**
 * Display animalView
 * @param {*} req 
 * @param {*} res 
 */
function animalView(req, res) {
    loadAnimalData(req, res);
}

// Export views
module.exports = {
    animalView
}