const Invoice = require("../../models/Invoices");
const Invoices_Model = require("../../models/Invoices");
var schedule = require('node-schedule');
module.exports.addinvoice = async (req, res) => {
  const { invoice ,status} = req.body;
  try {
    const Invoice = new Invoices_Model({ invoice: invoice,status:status });
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
module.exports.updateinvoice=(req,res)=>{
  Invoices_Model.findOneAndUpdate(
    { _id: req.params.id },
    { status:"Completed"},
    { runValidators: true },
    function (err, doc) { 
      if(err){
        res.send(err);
      }
      res.send({message:"Invoice Updated"});
    }
  );
}
schedule.scheduleJob('0 0 * * *', async() => { 
  try {
    const Invoices = await Invoices_Model.find({});
    for(let i=0;i<Invoices.length;i++){
      if(new Date(Invoices[i].date).getDate()===new Date().getDate()){
        Invoices_Model.findOneAndUpdate(
          { _id: Invoices[i]._id },
          { date: new Date(),status:"Pending"},
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
 module.exports.deleteinvoice =  (req,res) => {
  Invoices_Model.deleteOne({ _id: req.params.id }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.status(400).json(`Error: ${err}`);
    }
  });
};