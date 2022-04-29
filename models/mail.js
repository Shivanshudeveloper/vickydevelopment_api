const mongoose = require('mongoose');
const validator = require('validator')


const mailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Emails= mongoose.model('Emails',mailSchema);

module.exports = Emails;