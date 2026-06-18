const groq = require("./groqService");

const getNutrition = async (foodName) => {

    const response =
        await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "user",
                    content: `
Analyze ${foodName}

Return ONLY valid JSON.

{
  "foodName":"",
  "calories":0,
  "protein":0,
  "carbs":0,
  "fat":0
}
`
                }
            ]
        });

    let content =
        response.choices[0].message.content;

    content = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    try {
        return JSON.parse(content);
    } catch (error) {
        throw new Error("Invalid JSON returned from AI");
    }
};

module.exports = getNutrition;