const Invoice = require("../../models/Invoices");
const Invoices_Model = require("../../models/Invoices");
var schedule = require("node-schedule");
module.exports.addinvoice = async (req, res) => {
  try {
    const Invoice = new Invoices_Model(req.body);
    console.log(Invoice.type);
    await Invoice.save();
    res.send(Invoice);
  } catch (err) {
    res.send(err);
  }
};
module.exports.adddepositinvoice = async (req, res) => {
  const {
    invoice,
    status,
    lastPaymentDate,
    nextPaymentDate,
    createdByEmail,
    type,
  } = req.body;
  try {
    const Invoice1 = new Invoices_Model({
      invoice: invoice,
      status: "Completed",
      lastPaymentDate,
      nextPaymentDate,
      createdByEmail,
      type: "Deposit",
    });
    await Invoice1.save();
    const Invoice2 = new Invoices_Model({
      invoice: invoice,
      status: "Pending",
      lastPaymentDate,
      nextPaymentDate,
      createdByEmail,
      type: "Invoice",
    });
    await Invoice2.save();
    res.send(Invoice1);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getallinvoices = async (req, res) => {
  try {
    const Invoices = await Invoices_Model.find().sort({ date: -1 });
    console.log(Invoices);
    res.status(200).send(Invoices);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
module.exports.getinvoices = async (req, res) => {
  try {
    const Invoices = await Invoices_Model.find({
      createdByEmail: req.params.createdByEmail,
      // status: { $in: ["Pending", "Completed"] },
    }).sort({ date: -1 });
    Invoices.map(async (inv) => {
      const date = new Date();
      // const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      const pendingTime = inv.nextPaymentDate - date;
      if (
        pendingTime < 259200000 &&
        // pendingTime < 2380893288 &&
        inv.status !== "Pending" &&
        inv.status !== "Declined" &&
        inv.status !== "Waiting For Approvalupdateinvoice" &&
        inv.type === "PayRoll"
      ) {
        inv.status = "Pending";
        await Invoices_Model.findByIdAndUpdate(inv._id, inv, {
          useFindAndModify: false,
        });
      }
      if (inv.nextPaymentDate - date < 0 && inv.type === "PayRoll") {
        inv.status = "OverDue";
        await Invoices_Model.findByIdAndUpdate(inv._id, inv, {
          useFindAndModify: false,
        });
      }
    });
    const finalInvoices = Invoices.filter((inv) => inv.status !== "Created");
    res.send(finalInvoices);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports.updateinvoicestatus = async (req, res) => {
  const { contractID, lastPaymentDate, nextPaymentDate, status } = req.body;
  try {
    // const inv = await Invoices_Model.findOne({ contractID: contractID });
    // inv.status = status;
    // inv.lastPaymentDate = lastPaymentDate;
    // inv.nextPaymentDate = nextPaymentDate;
    // await Invoices_Model.findByIdAndUpdate(inv._id, inv, {
    //   useFindAndModify: false,
    // });
    await Invoices_Model.findOneAndUpdate(
      { contractID: contractID },
      { lastPaymentDate, nextPaymentDate, status },
      { useFindAndModify: false }
    );
    res.status(201).send({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Error" });
  }
};
module.exports.updateinvoice = async (req, res) => {
  const { status, lastPaymentDate, nextPaymentDate, firstMonthPaid, amount } =
    req.body;
  try {
    await Invoices_Model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      useFindAndModify: false,
    });
    res.status(201).send({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Error" });
  }
};
// schedule.scheduleJob("0 0 * * *", async () => {
//   try {
//     const Invoices = await Invoices_Model.find({});
//     for (let i = 0; i < Invoices.length; i++) {
//       if (new Date(Invoices[i].date).getDate() === new Date().getDate()) {
//         Invoices_Model.findOneAndUpdate(
//           { _id: Invoices[i]._id },
//           { date: new Date(), status: "Pending" },
//           { runValidators: true },
//           function (err, doc) {}
//         );
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });
module.exports.deleteinvoice = (req, res) => {
  Invoices_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};
