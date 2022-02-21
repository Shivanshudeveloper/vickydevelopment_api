const express = require("express");
const Contracts = require("../../models/Contracts");
const router = express.Router();
const ContractsFunc = require("./ContractsFunc");

router.post("/addcontract", ContractsFunc.addcontracts);
router.get("/getcontracts/:createdByEmail", ContractsFunc.getcontracts);
router.get("/searchcontract/:text", ContractsFunc.searchcontract);
router.get("/searchcontractemp/:text/:email", ContractsFunc.searchcontractemp);
router.get("/getlatestcontract/:email", ContractsFunc.getlatestcontract);
router.get("/getcontractsbyemail/:email", ContractsFunc.getcontractsByEmail);
router.patch("/updatecontract", ContractsFunc.updatecontract);
router.patch("/changecontractstatus", ContractsFunc.changecontractstatus);
router.patch("/changeapprovecontract", ContractsFunc.changeapprovecontract);
router.patch("/changevickysignature", ContractsFunc.changevickysignature);
router.patch("/changecustomersignature", ContractsFunc.changecustomersignature);
router.patch("/changevickyemployee", ContractsFunc.changevickyemployee);
router.patch("/changeemployeesignature", ContractsFunc.changeemployeesignature);

router.get("/getfinalizecontracts", ContractsFunc.getfinalizecontracts);
router.get(
  "/getvickeyapprovedcontracts",
  ContractsFunc.getvickeyapprovedcontracts
);
router.get("/getnotfinalizecontracts", ContractsFunc.getnotfinalizecontracts);
router.patch("/updatecontractbyid", ContractsFunc.updatecontractbyid);
router.get("/getcontract/:workEmail", ContractsFunc.getcontract);
router.get("/getcontractbyid/:id", ContractsFunc.getcontractbyid);
router.get("/getcontractsbystatus/:status", ContractsFunc.getcontractsbystatus);
router.get(
  "/getcontractscount/:status/:email",
  ContractsFunc.getcontractscount
);
router.delete("/removecontract/:id", ContractsFunc.removecontract);

module.exports = router;
