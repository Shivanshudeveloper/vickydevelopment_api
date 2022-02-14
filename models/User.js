const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  website: { type: String, default: "" },
  headquaters: { type: String, default: "" },
  numberOfPeople: { type: String, default: "" },
  registrationNumber: { type: String, default: "" },
  companyType: { type: String, default: "" },
  vatID: { type: String, default: "" },
  phone: { type: String, default: "" },
  organisationName: { type: String, default: "" },
  address: { type: String, default: "" },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const user = mongoose.model("user", userDataSchema);
module.exports = user;
