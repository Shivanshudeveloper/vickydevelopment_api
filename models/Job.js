const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    default: "",
  },
  seniorityLevel: {
    type: String,
    default: "",
  },
  jobForCountry: {
    type: String,
    default: "",
  },
  salaryBudget: {
    type: String,
    default: "",
  },
  phoneScreening: {
    type: Boolean,
    default: null,
  },
  jobScope: {
    type: String,
    default: "",
  },
  companyType: {
    type: String,
    default: "",
  },
  companyName: {
    type: String,
    default: "",
  },
  companyAddress: {
    type: String,
    default: "",
  },
  companyPhoneNumber: {
    type: String,
    default: "",
  },
  companyEmail: {
    type: String,
    default: "",
  },
  recruiterEmail: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  createdByEmail: {
    type: String,
    default: "",
  },
  publishDate: {
    type: Date,
  },
  submissions: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
