import axios from "axios"

const API =
  "http://localhost:5000/api/questions"

export async function generateQuestions() {
  const token = localStorage.getItem("token")

  const response = await axios.post(
    `${API}/generate`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}

export async function getQuestions(interviewId) {
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