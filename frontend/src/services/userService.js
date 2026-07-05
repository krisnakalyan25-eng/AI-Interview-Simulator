import axios from "axios"

const API = "http://localhost:5000/api/users"

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