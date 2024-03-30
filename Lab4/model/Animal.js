const mongoose = require('mongoose');

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Lab4');

// Create schema variable
let Schema = mongoose.Schema;

// Animal database schema
let animalSchema = new Schema({
    zoo: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isTransportable: {
        type: Boolean,
        required: true
    }
}, {
    collection: 'animals'
});

// Export animal schema
module.exports.Animal = mongoose.model('animal', animalSchema);