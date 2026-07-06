import axios from "axios"

const API =
  "https://ai-interview-simulator-0jvx.onrender.com/api/interviews"

export async function submitInterview(interviewId) {
  const token = localStorage.getItem("token")

  const response = await axios.patch(
    `${API}/${interviewId}/submit`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}

export async function getInterviews() {
  const token = localStorage.getItem("token")

  const response = await axios.get(
    API,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}

export async function getInterviewProgress(interviewId) {

  const token = localStorage.getItem("token")

  const response = await axios.get(
    `${API}/${interviewId}/progress`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}

export async function deleteInterview(interviewId) {

  const token = localStorage.getItem("token")

  const response = await axios.delete(
    `${API}/${interviewId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}

export async function getDashboard() {

  const token = localStorage.getItem("token")

  const response = await axios.get(
    `${API}/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}