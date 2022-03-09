const Requests_Model = require("../../models/Requests");

module.exports.addrequest = async (req, res) => {
  try {
    const Request = new Requests_Model(req.body);
    await Request.save();
    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.updaterequest = (req, res) => {
  Requests_Model.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.send({ message: "Request Updated" });
    }
  );
};
module.exports.getrequests = async (req, res) => {
  try {
    const Request = await Requests_Model.find().sort({ createdAt: -1 });

    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getrequestsbyemail = async (req, res) => {
  try {
    const Request = await Requests_Model.find({
      requestedBy: req.params.email,
    }).sort({ createdAt: -1 });

    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getrequest = async (req, res) => {
  try {
    const Request = await Requests_Model.find({ _id: req.params.id }).sort({
      createdAt: -1,
    });
    res.send(Request);
  } catch (err) {
    res.send(err);
  }
};
module.exports.removerequest = (req, res) => {
  Requests_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};
