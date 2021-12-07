const Offers_Model = require("../../models/Offers");

module.exports.addoffer = async (req, res) => {
  try {
    const Offers = new Offers_Model(req.body);
    await Offers.save();
    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getoffers = async (req, res) => {
  try {
    const Offers = await Offers_Model.find();

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getcompletedoffers = async (req, res) => {
  try {
    const Offers = await Offers_Model.find({ aggrementStatus: "Completed" });

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getnotapprovedoffers = async (req, res) => {
  try {
    const Offers = await Offers_Model.find({ approved: false });

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getworkerhired = async (req, res) => {
  try {
    const Offers = await Offers_Model.find({ workerHired: true });

    res.status(200).send(Offers);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.updateworkerhired = async(req, res) => {
  const { workEmail} = req.body;
  try {
    const off = await Offers_Model.findOne({ workEmail: workEmail });
    off.workerHired=true;
    await off.save();
    res.send(off);
  } catch (err) {
    res.send(err);
  }
}
module.exports.updateofferapprove = async(req, res) => {
  const { workEmail,approved} = req.body;
  try {
    const off = await Offers_Model.findOne({ workEmail: workEmail });
    off.approved=approved;
    await off.save();
    res.send(off);
  } catch (err) {
    res.send(err);
  }
}
module.exports.updateoffer = async (req, res) => {
  Offers_Model.findOneAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { useFindAndModify: false },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send(doc);
    }
  );
};
module.exports.removeoffer = (req, res) => {
  Offers_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};
