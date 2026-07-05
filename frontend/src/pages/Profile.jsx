
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import Navbar from "../components/Navbar"
import DashboardCard from "../components/DashboardCard"
import ResumeUpload from "../components/ResumeUpload"
import Spinner from "../components/Spinner"
import AIGenerationLoader from "../components/AIGenerationLoader"
import { getProfile } from "../services/userService"
import { generateQuestions } from "../services/questionService"


export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [questionsCount, setQuestionsCount] = useState(0)
  const [interviewId, setInterviewId] = useState("")
  const [resumeUploaded, setResumeUploaded] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile()
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfile()
  }, [])

  async function handleGenerateQuestions() {
    try {
      setLoading(true)

      const data = await generateQuestions()

      setInterviewId(data.interviewId)
      setQuestionsCount(data.totalQuestions)
      toast.success("Interview generated successfully!")
      navigate(`/interview/${data.interviewId}`)
    } catch (error) {
      console.log(error)
      toast.error(
        error.response?.data?.message ||
        "Failed to generate interview."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">Profile</h1>

          <p className="text-gray-500 mb-8">
            Welcome back, {user?.name} 👋
          </p>

          <div className="grid lg:grid-cols-2 gap-6">

            <DashboardCard title="Profile Information">
              {user ? (
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">{user?.name}</h2>
                    <p className="text-gray-500 mt-2">{user?.email}</p>

                    <span
                      className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium ${resumeUploaded
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                        }`}
                    >
                      {resumeUploaded ? "Resume Uploaded" : "Resume Required"}
                    </span>
                  </div>
                </div>
              ) : (
                <Spinner />
              )}
            </DashboardCard>

            <DashboardCard title="Resume Upload">
              <ResumeUpload
                onUploadSuccess={() => setResumeUploaded(true)}
                resumeUploaded={resumeUploaded}
                onGenerate={handleGenerateQuestions}
                loader={loading}
              />
            </DashboardCard>

            {questionsCount > 0 && (
              <div className="mt-4">
                <p className="text-green-600 font-semibold">
                  ✅ {questionsCount} Questions Generated
                </p>
              </div>
            )}

          </div>

          {loading && <AIGenerationLoader />}
        </div>
      </div>
    </>
  )
}