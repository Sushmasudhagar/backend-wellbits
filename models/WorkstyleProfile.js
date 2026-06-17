const mongoose = require("mongoose");

const workstyleSchema = new mongoose.Schema({

 userId:{
  type:String,
  required:true
 },

 workType:{
  type:String
 },

 workingHours:{
  type:Number
 },

 stressLevel:{
  type:Number
 },

 screenTime:{
  type:Number
 }

},
{
 timestamps:true
});

module.exports =
mongoose.model(
 "WorkstyleProfile",
 workstyleSchema
);