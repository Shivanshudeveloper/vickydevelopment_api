const mongoose = require('mongoose');

const FilesSchema = new mongoose.Schema({
   jobid:{
        type:String,
        required:true
   },
   fileurl:{
           type:String
   },
   description:{
        type:String,
        default:""
   },
   filename:{
        type:String
   },
    date: {
        type: Date,
        default: Date.now
    }
})
const Files = mongoose.model('Files', FilesSchema)
module.exports = Files;