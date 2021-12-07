const express =require('express');
const router=express.Router();
const OffersFunc=require("./OffersFunc");

router.post('/addoffer',OffersFunc.addoffer);
router.get('/getoffers',OffersFunc.getoffers);
router.get('/getworkerhired',OffersFunc.getworkerhired);

router.get('/getcompletedoffers',OffersFunc.getcompletedoffers);
router.get('/getnotapprovedoffers',OffersFunc.getnotapprovedoffers);
router.patch('/updateoffer',OffersFunc.updateoffer);
router.patch('/updateworkerhired',OffersFunc.updateworkerhired);
router.patch('/updateofferapprove',OffersFunc.updateofferapprove);
router.delete('/removeoffer/:id',OffersFunc.removeoffer);

module.exports=router;