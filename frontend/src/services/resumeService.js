import axios from "axios"

const API =
  "http://localhost:5000/api/resume"

export async function uploadResume(
  formData
) {
  const token =
    localStorage.getItem("token")

  const response = await axios.post(
    `${API}/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data"
      }
    }
  )

  return response.data
}