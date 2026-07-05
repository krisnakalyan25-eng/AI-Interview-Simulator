import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import PageLoader from "../components/PageLoader"

import { getInterviews, deleteInterview } from "../services/interviewService"

import toast from "react-hot-toast"
function Interviews() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  const [interviews, setInterviews] = useState([])

  useEffect(() => {

    async function fetchInterviews() {

      try {

        const data = await getInterviews()

        setInterviews(data.interviews)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchInterviews()

  }, [])

  async function handleDelete(id) {

    const ok = window.confirm(
      "Delete this interview?"
    )

    if (!ok) return

    try {

      await deleteInterview(id)

      setInterviews(prev =>
        prev.filter(item => item._id !== id)
      )

      toast.success("🗑️ Interview deleted successfully!", {
        duration: 3000,
        position: "top-center",
        style: {
          borderRadius: "12px",
          background: "#16a34a",
          color: "#fff",
        },
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to delete interview.",
        {
          duration: 3000,
          position: "top-right",
        })

    }

  }

  if (loading) {

    return (
      <>
        <Navbar />
        <PageLoader text="Loading Interviews..." />
      </>
    )

  }

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">

            📜 Interview History

          </h1>

          {
            interviews.length === 0 ? (

              <div className="bg-white rounded-xl p-8 shadow">

                No Interviews Found

              </div>

            ) : (

              <div className="space-y-6">

                {

                  interviews.map((interview) => (

                    <div
                      key={interview._id}
                      className="bg-white rounded-2xl shadow p-6"
                    >

                      <div className="flex justify-between items-center">

                        <div>

                          <h2 className="text-xl font-bold">

                            Interview

                          </h2>

                          <p className="text-gray-500">

                            {new Date(interview.createdAt).toLocaleString()}

                          </p>

                        </div>

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold
                          ${interview.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                            }`}
                        >

                          {interview.status}

                        </span>

                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">

                        <div>

                          <p className="text-gray-500">

                            Questions

                          </p>

                          <h3 className="text-2xl font-bold">

                            {interview.totalQuestions}

                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500">

                            Score

                          </p>

                          <h3 className="text-2xl font-bold">

                            {interview.averageScore.toFixed(1)}

                          </h3>

                        </div>

                      </div>

                      <div className="mt-6">

                        {

                          interview.status === "completed" ? (

                            <button
                              onClick={() =>
                                navigate(`/results/${interview._id}`)
                              }
                              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                            >

                              View Results

                            </button>

                          ) : (

                            <button
                              onClick={() =>
                                navigate(`/interview/${interview._id}`)
                              }
                              className="bg-green-600 text-white px-6 py-3 rounded-lg"
                            >

                              Resume Interview

                            </button>

                          )

                        }

                        <button
                          onClick={() => handleDelete(interview._id)}
                          className="ml-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  ))

                }

              </div>

            )

          }

        </div>

      </div>

    </>

  )

}

export default Interviews