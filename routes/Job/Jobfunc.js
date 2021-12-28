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
