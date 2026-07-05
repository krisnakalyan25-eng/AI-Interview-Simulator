const axios = require("axios")

async function generateQuestions(resumeText) {
  const prompt = `
You are a senior software engineering interviewer.

Based on the resume below:

${resumeText}

Generate 20 interview questions.
Each skills or 4 Questions. 
Return ONLY JSON array.

1. Skills mentioned in resume
2. Projects mentioned in resume
3. Internship experience
4. Technologies used

Generate:
- 60% technical questions
- 40% project-based questions
Example:

[
  {
    "skill": "React",
    "question": "What is Virtual DOM?"
  }
]
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
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
      }
    }
  )

  const content =
    response.data.choices[0].message.content

  // Remove markdown code fences if present
  const cleanedContent = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim()

  return JSON.parse(cleanedContent)
}

module.exports = generateQuestions