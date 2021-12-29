const Job_Model = require("../../models/Job");

module.exports.add = async (req, res) => {
 
  try {
    const newJob = new Job_Model(req.body);
    
    await newJob.save();
    console.log(newJob);
    res.status(201).send({ message: "Job Created" });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getjobs = async (req, res) => {
  const {  email } = req.params;
  try {
    const Jobs =await Job_Model.find({email:email});
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.deletejob = async (req, res) => {
 
  try {
    const deleted = await  Job_Model.deleteOne({_id:req.params.id});
    res.status(204).send({ message: "Job Deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.updatejob =  (req, res) => {
  Job_Model.findOneAndUpdate(
    { _id: req.body._id },
  req.body,
    { runValidators: true },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.status(402).send({message:"Job Updated"});
    }
  );
};
module.exports.getjobsbycountry = async (req, res) => {
  const {  country } = req.params;
  try {
    const Jobs =await Job_Model.find({country:country});
    res.status(200).send(Jobs);
  } catch (err) {
    res.status(500).send(err);
  }
};