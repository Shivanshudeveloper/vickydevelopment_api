const express =require('express');
const router=express.Router();

const Jobfun=require('./Jobfunc');

router.get('/getjobs/:email',Jobfun.getjobs);
router.post('/add',Jobfun.add);

module.exports=router;