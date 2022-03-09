const express = require("express");
const router = express.Router();

const Invoicesfunc = require("./Invoicesfunc");

router.get("/:createdByEmail", Invoicesfunc.getinvoices);
router.get("/", Invoicesfunc.getallinvoices);
router.post("/addinvoice", Invoicesfunc.addinvoice);
router.post("/adddepositinvoice", Invoicesfunc.adddepositinvoice);
router.patch("/updateinvoicestatus", Invoicesfunc.updateinvoicestatus);
router.patch("/updateinvoice/:id", Invoicesfunc.updateinvoice);
router.delete("/:id", Invoicesfunc.deleteinvoice);

module.exports = router;
