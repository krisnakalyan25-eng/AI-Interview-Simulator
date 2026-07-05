const axios = require("axios")

async function evaluateAnswer(question, answer) {
  try {
    const prompt = `
You are a technical interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Return ONLY valid JSON:

{
  "score": 0,
  "feedback": ""
}
`

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )

    const content =
      response.data.choices[0].message.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()

    return JSON.parse(content)

  } catch (error) {
    console.error(error.response?.data || error.message)
    throw error
  }
}

module.exports = evaluateAnswer

