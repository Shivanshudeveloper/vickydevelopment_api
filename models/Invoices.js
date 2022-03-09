const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoice: {
    type: Object,
  },
  status: {
    type: String,
    default: "Pending",
  },
  type: {
    type: String,
  },
  invoiceFor: {
    type: String,
  },
  createdByEmail: {
    type: String,
    default: "",
  },
  contractID: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  amount: {
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
  firstMonthPaid: {
    type: Boolean,
    dafault: false,
  },
});
const Invoices = mongoose.model("Invoices", InvoiceSchema);
module.exports = Invoices;
