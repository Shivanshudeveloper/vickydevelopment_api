const Job_Model = require("../../models/Job");

module.exports.add = async (req, res) => {
  try {
    const newJob = new Job_Model(req.body);

    await newJob.save();
    console.log(newJob);
    res.status(201).send(newJob);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getalljobs = async (req, res) => {
  try {
    const Jobs = await Job_Model.find().sort({ publishDate: -1 });
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getjobs = async (req, res) => {
  try {
    const Jobs = await Job_Model.find({
      createdByEmail: req.params.createdByEmail,
    }).sort({ publishDate: -1 });
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getjob = async (req, res) => {
  try {
    const Job = await Job_Model.find({ _id: req.params.id }).sort({
      publishDate: -1,
    });
    res.status(200).send(Job);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getjobscount = async (req, res) => {
  try {
    const jobs = await Job_Model.find({
      $or: [{ status: "receiving candidates" }, { status: "online" }],
      createdByEmail: req.params.createdByEmail,
    }).sort({ publishDate: -1 });

    res
      .status(200)
      .send({ count: jobs.length, lastPublishDate: jobs[0]?.publishDate });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.deletejob = async (req, res) => {
  try {
    const deleted = await Job_Model.deleteOne({ _id: req.params.id });
    res.status(204).send({ message: "Job Deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.updatejob = (req, res) => {
  Job_Model.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.status(402).send({ message: "Job Updated" });
    }
  );
};
module.exports.getjobsbyemail = async (req, res) => {
  const { recruiterEmail } = req.params;
  try {
    const Jobs = await Job_Model.find({ recruiterEmail: recruiterEmail }).sort({
      date: -1,
    });
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getjobsbycountry = async (req, res) => {
  const { country } = req.params;
  try {
    const Jobs = await Job_Model.find({ country: country });
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};
