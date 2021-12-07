const express =require('express');
const router=express.Router();
const ContractsFunc=require("./ContractsFunc");

router.post('/addcontract',ContractsFunc.addcontracts);
router.get('/getcontracts',ContractsFunc.getcontracts);
router.patch('/updatecontract',ContractsFunc.updatecontract);
router.patch('/changecontractstatus',ContractsFunc.changecontractstatus);
router.patch('/changeapprovecontract',ContractsFunc.changeapprovecontract);

router.get('/getfinalizecontracts',ContractsFunc.getfinalizecontracts);
router.get('/getvickeyapprovedcontracts',ContractsFunc.getvickeyapprovedcontracts);
router.get('/getnotfinalizecontracts',ContractsFunc.getnotfinalizecontracts);

router.get('/getcontract/:workEmail',ContractsFunc.getcontract);

router.delete('/removecontract/:id',ContractsFunc.removecontract);

module.exports=router;