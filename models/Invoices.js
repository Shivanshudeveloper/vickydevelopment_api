const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
   invoice:{
           type:Object
   },
    date: {
        type: Date,
        default: Date.now
    }
})
const Invoices = mongoose.model('Invoices', InvoiceSchema)
module.exports = Invoices;