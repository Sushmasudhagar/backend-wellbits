const {
    generateDietPlan
} = require("../services/dietService");

const getDietPlan =
async(req,res)=>{

    try {
        console.log("BODY:", req.body);

        const plan = await generateDietPlan(req.body);

        const dietPlan =
            await generateDietPlan(
                req.body
            );

        res.status(200).json({
            success: true,
            dietPlan
        });

    } catch(error){

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getDietPlan
};