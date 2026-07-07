import axios from "axios"

const API =
  "https://ai-interview-simulator-0jvx.onrender.com/api/auth"

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API}/login`,
    userData
  )

  return response.data
}

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API}/register`,
    userData
  )

  return response.data
}