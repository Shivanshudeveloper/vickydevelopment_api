const { stringify } = require("uuid");
const Meet = require("../../models/Meet");

module.exports.addmeet = async (req, res) => {
  try {
    const newMeet = new Meet(req.body);
    await newMeet.save();
    console.log(newMeet);
    res.status(200).send(newMeet);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
