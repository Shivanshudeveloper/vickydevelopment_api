const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
   invoice:{
           type:Object
   },
   status:{
    type:String,
    default:"Pending"
   },
    date: {
        type: Date,
        default: Date.now
    }
})
const Invoices = mongoose.model('Invoices', InvoiceSchema)
module.exports = Invoices;