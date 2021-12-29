const express =require('express');
const router=express.Router();

const Jobfun=require('./Jobfunc');

router.get('/getjobs/:email',Jobfun.getjobs);
router.post('/add',Jobfun.add);
router.delete('/deletejob/:id',Jobfun.deletejob);
router.patch('/updatejob',Jobfun.updatejob);
router.get('/getjobsbycountry/:country',Jobfun.getjobsbycountry);
module.exports=router;