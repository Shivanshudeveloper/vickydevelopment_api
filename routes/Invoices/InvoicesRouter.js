const express =require('express');
const router=express.Router();

const Invoicesfunc=require('./Invoicesfunc');
router.get('/',Invoicesfunc.getinvoices);
router.post('/addinvoice',Invoicesfunc.addinvoice);

module.exports=router;