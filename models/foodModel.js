const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
    image:{
        type:String
    },

    foodName:{
        type:String
    },

    calories:{
        type:Number
    },

    protein:{
        type:Number
    },

    carbs:{
        type:Number
    },

    fat:{
        type:Number
    },

    dietChart:{
        type:String
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Food",foodSchema);