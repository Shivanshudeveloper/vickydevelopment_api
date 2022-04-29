const express =require('express');
const { emailFunc } = require('./emailfunc');
const router=express.Router();

router.route('/').post(emailFunc);

module.exports = router;
