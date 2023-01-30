const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    album : [{
        name : String,
        year: String,
    }]
})

module.exports = mongoose.model('Artist', Schema)