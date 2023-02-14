const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Please type a value']
    }
}, {
    timestamps: true

})

module.exports = mongoose.model('Auto', autoSchema)