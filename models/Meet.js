const mongoose = require("mongoose");

const MeetSchema = new mongoose.Schema({
  createdAt: { type: Date, default: new Date() },
  email: { type: String, default: "" },
  jobID: { type: String, default: "" },
  date: { type: String, default: "" },
  time: { type: String, default: "" },
  title: { type: String, default: "" },
  hostURL: { type: String, default: "" },
  attendeeURL: { type: String, default: "" },
});
const Meets = mongoose.model("Meets", MeetSchema);
module.exports = Meets;
