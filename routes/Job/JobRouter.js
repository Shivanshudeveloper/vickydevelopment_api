const express =require('express');
const router=express.Router();

const Jobfun=require('./Jobfunc');

router.get('/getjobs',Jobfun.getjobs);
router.post('/add',Jobfun.add);
router.delete('/deletejob/:id',Jobfun.deletejob);
router.patch('/updatejob/:id',Jobfun.updatejob);
router.get('/getjob/:id',Jobfun.getjob)
router.get('/getjobsbycountry/:country',Jobfun.getjobsbycountry);
router.get('/getjobscount',Jobfun.getjobscount)
module.exports=router;