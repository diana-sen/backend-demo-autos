const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Please type a brand']
    },
    model: {
        type: String,
        required: [true, 'Please type a model']
    },
    year: {
        type: String,
        required: [true, 'Please type a year']
    },
    color: {
        type: String,
        required: [true, 'Please type a color']
    }
}, {
    timestamps: true

})

module.exports = mongoose.model('Auto', autoSchema)