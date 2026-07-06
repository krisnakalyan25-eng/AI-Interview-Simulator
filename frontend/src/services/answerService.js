import axios from "axios"

const API_URL =
  "https://ai-interview-simulator-0jvx.onrender.com/api/answers"

export async function submitAnswer(answerData) {
  const token = localStorage.getItem("token")

  const response = await axios.post(
    API,
    answerData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}