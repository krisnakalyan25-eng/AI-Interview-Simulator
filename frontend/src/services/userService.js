import axios from "axios"

const API =
  "https://ai-interview-simulator-0jvx.onrender.com/api/users"

export async function getProfile() {
  const token = localStorage.getItem("token")

  const response = await axios.get(
    `${API}/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}