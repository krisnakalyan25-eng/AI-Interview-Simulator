import axios from "axios"

const API_URL =
  "https://ai-interview-simulator-0jvx.onrender.com/api/auth"

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  )

  return response.data
}

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  )

  return response.data
}