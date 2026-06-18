const groq = require("./groqService");

const generateDietPlan = async (userData) => {

    if (!userData) {
        throw new Error("User data is required");
    }

    const prompt = `
You are a professional nutritionist.

Create a diet recommendation based on:

Food Name: ${userData.foodName}
Calories: ${userData.calories}
Protein: ${userData.protein}
Carbs: ${userData.carbs}
Fat: ${userData.fat}

Provide:

1. Health analysis
2. Benefits
3. Risks (if any)
4. Suggested meal timing
5. Recommended daily intake advice

Return plain text.
`;

    const completion =
        await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content: "You are an expert nutritionist."
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