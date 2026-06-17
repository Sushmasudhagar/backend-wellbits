const mongoose = require("mongoose");

const lifestyleSchema = new mongoose.Schema({

 userId:{
   type:String,
   required:true
 },

 waterIntake:{
   type:Number
 },

 sleepHours:{
   type:Number
 },

 exerciseMinutes:{
   type:Number
 },

 smoking:{
   type:Boolean
 },

 alcohol:{
   type:Boolean
 }

},
{
 timestamps:true
});

module.exports =
mongoose.model(
 "LifestyleProfile",
 lifestyleSchema
);