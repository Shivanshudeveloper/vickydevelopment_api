const Invoice = require("../../models/Invoices");
const Invoices_Model = require("../../models/Invoices");
var schedule = require('node-schedule');
module.exports.addinvoice = async (req, res) => {
  const { invoice } = req.body;
  try {
    const Invoice = new Invoices_Model({ invoice: invoice });
    await Invoice.save();
    res.send(Invoice);
  } catch (err) {
    res.send(err);
  }
};
module.exports.getinvoices = async (req,res) => {
  try {
    const Invoices = await Invoices_Model.find({});
    res.send(Invoices);
  } catch (err) {
    res.send(err);
  }
};
schedule.scheduleJob('0 0 * * *', async() => { 
  try {
    const Invoices = await Invoices_Model.find({});
    for(let i=0;i<Invoices.length;i++){
      if(new Date(Invoices[i].date).getDate()===new Date().getDate()){
        Invoices_Model.findOneAndUpdate(
          { _id: Invoices[i]._id },
          { date: new Date() },
          { runValidators: true },
          function (err, doc) { 
          }
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
 }) 
