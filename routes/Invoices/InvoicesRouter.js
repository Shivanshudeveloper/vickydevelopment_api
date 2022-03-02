const express = require("express");
const router = express.Router();

const Invoicesfunc = require("./Invoicesfunc");
router.get("/:createdByEmail", Invoicesfunc.getinvoices);
router.post("/addinvoice", Invoicesfunc.addinvoice);
router.patch("/updateinvoice/:id", Invoicesfunc.updateinvoice);
router.delete("/:id", Invoicesfunc.deleteinvoice);

module.exports = router;
