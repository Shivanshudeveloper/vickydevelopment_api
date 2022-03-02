const express = require("express");

const router = express.Router();

const MailFunc = require("./MailFunc");

router.post("/send", MailFunc.send);

module.exports = router;
