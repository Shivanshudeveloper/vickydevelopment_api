const mongoose = require("mongoose");

const demoUserDataSchema = new mongoose.Schema({
  fName: { type: String, default: "" },
  lName: { type: String, default: "" },
  headquaters: { type: String, default: "" },
  numberOfPeople: { type: String, default: "" },
  email: { type: String, unique: true, required: true },
  website: { type: String, default: "" },
  phone: { type: String, default: "" },
  date: {
    type: Date,
    default: Date.now,
  },
});
const demouser = mongoose.model("demo-user", demoUserDataSchema);
module.exports = demouser;
