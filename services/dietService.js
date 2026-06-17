const groq = require("./groqService");

const generateDietChart = async (nutrition) => {

    const response =
    await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [
            {
                role: "user",
                content: `
                Food: ${nutrition.foodName}

                Calories: ${nutrition.calories}
                Protein: ${nutrition.protein}
                Carbs: ${nutrition.carbs}
                Fat: ${nutrition.fat}

                Create a healthy one day diet plan.
                `
            }
        ]
    });

    return response.choices[0].message.content;
};

module.exports = generateDietChart;