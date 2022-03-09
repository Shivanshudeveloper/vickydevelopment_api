const { stringify } = require("uuid");
const Contracts_Model = require("../../models/Contracts");

module.exports.addcontracts = async (req, res) => {
  if (req.body._id) {
    Contracts_Model.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { runValidators: true },
      function (err, doc) {
        if (err) {
          res.send(err);
        }
        console.log(doc);
        res.send(doc);
      }
    );
  } else {
    try {
      const Contracts = new Contracts_Model(req.body);

      await Contracts.save();
      console.log(Contracts);
      res.status(200).send(Contracts);
    } catch (err) {
      res.status(400).json({ err: err });
      console.log(err);
    }
  }
};

module.exports.updatecontractbyid = (req, res) => {
  Contracts_Model.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { runValidators: true },
    function (err, doc) {
      if (err) {
        res.send(err);
      }
      console.log(doc);
      res.send(doc);
    }
  );
};

module.exports.getcontracts = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      createdByEmail: req.params.createdByEmail,
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.searchcontractemp = async (req, res) => {
  const text = req.params.text;
  const email = req.params.email;
  const contractType = new RegExp(text, "i");
  const companyName = new RegExp(text, "i");
  try {
    const contracts = await Contracts_Model.find({
      $or: [{ companyName }, { contractType }],
      email: email,
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.searchcontract = async (req, res) => {
  const text = req.params.text;
  const contractType = new RegExp(text, "i");
  const employeeFirstName = new RegExp(text, "i");
  const employeeLastName = new RegExp(text, "i");
  try {
    const contracts = await Contracts_Model.find({
      $or: [{ employeeLastName }, { employeeFirstName }, { contractType }],
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getlatestcontract = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      email: req.params.email,
      status: "ONLINE",
    }).sort({ vickyEmployeeSignatureDate: -1 });
    res.status(200).send(contracts[0]);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getcontractsByEmail = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      email: req.params.email,
      status: req.params.status,
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getcontractsbyworkeremail = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      email: req.params.email,
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

module.exports.getcontractsbystatus = async (req, res) => {
  try {
    console.log(req.params.status);
    const contracts = await Contracts_Model.find({
      status: req.params.status,
    }).sort({ date: -1 });
    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.updatecontract = async (req, res) => {
  const {
    id,
    status,
    remarks,
    signUrl,
    commercialContract1,
    commercialContract2,
    employementContract,
  } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: id });
    contract.status = status;
    contract.remarks = remarks;
    contract.signUrl = signUrl;
    contract.commercialContract1 = commercialContract1;
    contract.commercialContract2 = commercialContract2;
    contract.employementContract = employementContract;
    await contract.save();
    res.send(contract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.changeemployeesignature = async (req, res) => {
  const { _id, employeeSignature, employeeSignatureDate } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.employeeSignature = employeeSignature;
    contract.employeeSignatureDate = employeeSignatureDate;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      { useFindAndModify: false }
    );
    res.send(contract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.changecustomersignature = async (req, res) => {
  const { _id, customerSignature, customerSignatureDate } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.customerSignature = customerSignature;
    contract.customerSignatureDate = customerSignatureDate;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      {
        useFindAndModify: false,
      }
    );
    res.send(newContract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.changevickyemployee = async (req, res) => {
  const {
    _id,
    vickyEmployeeSignature,
    vickyEmployeeSignatureDate,
    vickyEmployeeSignatureIP,
    vickyEmployeeSignatureCountry,
    vickyEmployeeSignatureEmail,
  } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.vickyEmployeeSignature = vickyEmployeeSignature;
    contract.vickyEmployeeSignatureDate = vickyEmployeeSignatureDate;
    contract.vickyEmployeeSignatureIP = vickyEmployeeSignatureIP;
    contract.vickyEmployeeSignatureCountry = vickyEmployeeSignatureCountry;
    contract.vickyEmployeeSignatureEmail = vickyEmployeeSignatureEmail;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      { useFindAndModify: false }
    );
    res.send(contract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.changevickysignature = async (req, res) => {
  const {
    _id,
    vickySignature,
    vickySignatureDate,
    vickySignatureSignedBy,
    vickySignatureIP,
    vickySignatureCountry,
    vickySignatureEmail,
  } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.vickySignature = vickySignature;
    contract.vickySignatureDate = vickySignatureDate;
    contract.vickySignatureSignedBy = vickySignatureSignedBy;
    contract.vickySignatureIP = vickySignatureIP;
    contract.vickySignatureCountry = vickySignatureCountry;
    contract.vickySignatureEmail = vickySignatureEmail;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      { useFindAndModify: false }
    );
    res.send(contract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.changecontractstatus = async (req, res) => {
  const { _id, status } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.status = status;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      { useFindAndModify: false }
    );
    res.status(200).send(newContract);
  } catch (err) {
    res.status(404).send(err);
  }
};
module.exports.getcontractscount = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      status: req.params.status,
      email: req.params.email,
    });
    console.log(contracts);
    res.send({ count: contracts.length });
  } catch (err) {
    console.log(err);
  }
};
module.exports.changeapprovecontract = async (req, res) => {
  const { _id, vickeyApproved, status } = req.body;
  try {
    const contract = await Contracts_Model.findOne({ _id: _id });
    contract.vickeyApproved = vickeyApproved;
    contract.status = status;
    const newContract = await Contracts_Model.findByIdAndUpdate(
      contract._id,
      contract,
      { useFindAndModify: false }
    );
    // console.log(newContract);
    res.send(newContract);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getfinalizecontracts = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({ status: "Approved" }).sort({
      date: -1,
    });

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getvickeyapprovedcontracts = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({ vickeyApproved: true }).sort(
      { date: -1 }
    );

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getnotfinalizecontracts = async (req, res) => {
  try {
    const contracts = await Contracts_Model.find({
      status: "Not Approved",
    }).sort({ date: -1 });

    res.status(200).send(contracts);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getcontract = async (req, res) => {
  const { workEmail } = req.params;

  try {
    const contract = await Contracts_Model.find({ workEmail: workEmail }).sort({
      date: -1,
    });

    res.status(200).send(contract);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.getcontractbyid = async (req, res) => {
  const { id } = req.params;

  try {
    const contract = await Contracts_Model.find({ _id: id }).sort({
      date: -1,
    });

    res.status(200).send(contract);
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
module.exports.removecontract = (req, res) => {
  Contracts_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};
