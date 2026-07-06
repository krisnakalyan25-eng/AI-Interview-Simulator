import axios from "axios"

const API_URL =
  "https://ai-interview-simulator-0jvx.onrender.com/api/results"

export async function getResults(interviewId) {
  const token = localStorage.getItem("token")

  const response = await axios.get(
    `${API}/${interviewId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}