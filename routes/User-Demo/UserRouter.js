const express = require("express");

const router = express.Router();

const UserFunc = require("./UserFunc");

router.post("/save", UserFunc.adduser);
router.get("/getdemos", UserFunc.getdemos);
router.get("/getuser/:id", UserFunc.getdemo);
router.get("/deleteuser/:id", UserFunc.deleteuser);
// router.patch("/updateuser/:email", UserFunc.updateuser);
// router.patch("/setlayout", UserFunc.setlayout);
// router.patch("/updaterestaurantName", UserFunc.updaterestaurantName);
// router.patch("/updaterestaurantAddress", UserFunc.updaterestaurantAddress);
// router.patch("/updatelogo", UserFunc.updatelogo);
module.exports = router;
