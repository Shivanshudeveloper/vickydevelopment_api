const express =require('express');
const router=express.Router();
const RequestsFunc=require("./RequestsFunc");

router.post('/addrequest',RequestsFunc.addrequest);
router.patch('/updaterequest/:id',RequestsFunc.updaterequest);
router.get('/getrequests',RequestsFunc.getrequests);
router.get('/getrequest/:id',RequestsFunc.getrequest);
router.delete('/removerequest/:id',RequestsFunc.removerequest);

module.exports=router;