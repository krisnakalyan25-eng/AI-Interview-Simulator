import axios from "axios"

const API = "http://localhost:5000/api/results"

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