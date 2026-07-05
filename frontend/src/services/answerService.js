import axios from "axios"

const API = "http://localhost:5000/api/answers"

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