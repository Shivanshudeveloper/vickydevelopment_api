const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoice: {
    type: Object,
  },
  status: {
    type: String,
    default: "Pending",
  },
  createdByEmail: {
    type: String,
    default: "",
  },
  pendingTime: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastPaymentDate: {
    type: Date,
  },
  nextPaymentDate: {
    type: Date,
  },
});
const Invoices = mongoose.model("Invoices", InvoiceSchema);
module.exports = Invoices;
