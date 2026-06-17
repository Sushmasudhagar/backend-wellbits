const mongoose = require("mongoose");

const healthProfileSchema = new mongoose.Schema({

  userId:{
    type:String,
    required:true
  },

  height:{
    type:Number,
    required:true
  },

  weight:{
    type:Number,
    required:true
  },

  bloodGroup:{
    type:String
  },

  bloodPressure:{
    type:String
  },

  sugarLevel:{
    type:Number
  },

  medicalConditions:[String]

},
{
 timestamps:true
});

module.exports =
mongoose.model(
 "HealthProfile",
 healthProfileSchema
);