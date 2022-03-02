const express = require("express");
const router = express.Router();
const Meetfunc = require("./Meetfunc");

router.post("/addmeet", Meetfunc.addmeet);

module.exports = router;
