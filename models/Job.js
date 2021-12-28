const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
   email:{
        type:String,
        required:true
   },
   category:{
        type:String,
        required:true
   },
   jobtitle:{
        type:String,
        required:true
   },
   country:{
           type:String
   },
   description:{
        type:String
   },
    date: {
        type: Date,
        default: Date.now
    }
})
const Job = mongoose.model('Job', JobSchema)
module.exports = Job;