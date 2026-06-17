const grok = require("../config/groq");
const calculateBMI =
require("../utils/bmiCalculator");

const generateDietPlan = async(userData) => {

        if (!userData) {
        throw new Error("User data is required");
    }

    if (!userData.weight || !userData.height) {
        throw new Error(
            "Weight and height are required"
        );
    }

    const bmi = calculateBMI(
        userData.weight,
        userData.height
    );


    const prompt = `
You are a professional nutritionist.

Create a personalized one-day diet plan.

User Information:

Age: ${userData.age}
Gender: ${userData.gender}
Weight: ${userData.weight} kg
Height: ${userData.height} cm
BMI: ${bmi}

Health Conditions:
${userData.healthConditions.join(", ")}

Activity Level:
${userData.activityLevel}

Food Preference:
${userData.foodPreference}

Provide:

1. Daily calories
2. Protein target
3. Breakfast
4. Lunch
5. Snacks
6. Dinner
7. Nutritional explanation

Return JSON only.
`;

    const completion =
        await grok.chat.completions.create({

         model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content:
                    "You are an expert dietician."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.7
        });

    return completion
        .choices[0]
        .message
        .content;
};

module.exports = {
    generateDietPlan
};