const Files_Model = require("../../models/Files");

module.exports.add = async (req, res) => {
 
  try {
    const newFile = new Files_Model(req.body);
    await newFile.save();
    res.status(201).send({ message: "File Added" });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.getfiles = async (req, res) => {
  const {  jobid } = req.params;
  try {
    const files =await Files_Model.find({jobid:jobid});
    res.status(200).send(files);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.deletefile = async (req, res) => {
 
        try {
           await  Files_Model.deleteOne({_id:req.params.id});
          res.status(204).send({ message: " Deleted" });
        } catch (err) {
          res.status(500).send(err);
        }
      };