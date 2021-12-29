const express =require('express');
const router=express.Router();

const FilesFunc=require('./FilesFunc');

router.get('/getfiles/:jobid',FilesFunc.getfiles);
router.post('/add',FilesFunc.add);
router.delete('/deletefile/:id',FilesFunc.deletefile);

module.exports=router;