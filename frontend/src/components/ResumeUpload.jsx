


import { useState } from "react"
import { uploadResume } from "../services/resumeService"
import Spinner from "./Spinner"
import toast from "react-hot-toast"

function ResumeUpload({
  onUploadSuccess,
  resumeUploaded,
  onGenerate,
  loader
}) {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  async function handleUpload() {
    if (!file) {
      toast.error("Please select a resume.")
      return
    }

    try {
      setLoading(true)

      const formData = new FormData()
      formData.append("resume", file)

      const data = await uploadResume(formData)

      setMessage(data.message)

      toast.success("Resume uploaded successfully!")

      onUploadSuccess?.()

      setTimeout(() => setMessage(""), 3000)
      setFile(null)
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Resume upload failed."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">

      <h2 className="text-2xl font-bold mb-4">📄 Resume Upload</h2>

      <p className="text-gray-600 mb-4">
        Upload your latest resume to generate AI interview questions.
      </p>

      <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition">
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <span className="text-gray-500">Click to Select Resume</span>
      </label>

      {file && (
        <div className="mt-4 bg-blue-50 p-3 rounded-lg">
          <p className="text-blue-700 font-medium">Selected File:</p>
          <p>{file.name}</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition disabled:bg-gray-400"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <Spinner />
            <span>Uploading...</span>
          </div>
        ) : (
          "Upload Resume"
        )}
      </button>

      {message && (
        <p className="mt-4 text-green-600 font-medium">✅ {message}</p>
      )}

      {resumeUploaded && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2">🤖 AI Interview</h3>

          <p className="text-gray-600 mb-4">
            Your resume is ready. Generate personalized interview questions.
          </p>

          <button
            onClick={onGenerate}
            disabled={loader}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl disabled:bg-gray-400 transition"
          >
            {loader ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner />
                <span>Generating...</span>
              </div>
            ) : (
              "🚀 Generate Questions"
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default ResumeUpload