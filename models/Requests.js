const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  requestType: {
    type: String,
    default: "",
  },
  submissionDate: {
    type: Date,
    default: null,
  },
  dueDate: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    default: "",
  },
  request: {
    type: String,
    default: "",
  },
  submittedTo: {
    type: String,
    default: "",
  },
  amount: {
    type: String,
    default: "",
  },
  startingFrom: {
    type: Date,
    default: null,
  },
  until: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  requestedBy: {
    type: String,
    default: "",
  },
  declineMessage: {
    type: String,
    default: "Declined",
  },
});
const Requests = mongoose.model("Requests", RequestSchema);
module.exports = Requests;
