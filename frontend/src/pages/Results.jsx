import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { getResults } from "../services/resultService"

function Results() {
  const { interviewId } = useParams()

  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)

  useEffect(() => {
    async function fetchResults() {
      try {
        const data = await getResults(interviewId)
        setResult(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [interviewId])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl font-semibold animate-pulse">
            Loading Results...
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            📊 Interview Report
          </h1>

          {/* Summary */}

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Questions
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-3">
                {result?.totalQuestions}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Average Score
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-3">
                {Number(result?.averageScore).toFixed(1)}
                <span className="text-xl"> /10</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Performance
              </h3>

              <p className="text-2xl font-bold mt-3">
                {
                  result?.averageScore >= 8
                    ? "🌟 Excellent"
                    : result?.averageScore >= 6
                      ? "👍 Good"
                      : "📘 Needs Practice"
                }
              </p>
            </div>

          </div>

          {/* Answers */}

          <div className="space-y-6">

            {
              result?.answers?.map((answer, index) => (

                <div
                  key={answer._id}
                  className="bg-white rounded-2xl shadow p-6"
                >

                  <div className="flex justify-between">

                    <h2 className="text-xl font-bold">
                      Question {index + 1}
                    </h2>

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {answer.question?.skill}
                    </span>

                  </div>

                  <p className="mt-4 font-semibold text-lg">
                    {answer.question?.question}
                  </p>

                  <div className="mt-6">

                    <h3 className="font-semibold text-gray-600">
                      Your Answer
                    </h3>

                    <div className="bg-slate-50 rounded-xl p-4 mt-2">
                      {answer.answerText}
                    </div>

                  </div>

                  <div className="mt-6 flex gap-8">

                    <div>

                      <h3 className="font-semibold text-gray-600">
                        AI Score
                      </h3>

                      <p className="text-3xl font-bold text-green-600 mt-2">
                        {answer.score}/10
                      </p>

                    </div>

                    <div className="flex-1">

                      <h3 className="font-semibold text-gray-600">
                        AI Feedback
                      </h3>

                      <div className="bg-green-50 rounded-xl p-4 mt-2">
                        {answer.feedback}
                      </div>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>
          {/* AI Suggestions */}

          <div className="bg-white rounded-2xl shadow p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">
              🤖 AI Improvement Suggestions
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div>

                <h3 className="text-green-600 font-bold text-xl mb-4">
                  💪 Strengths
                </h3>

                {
                  result?.suggestions?.strengths?.length > 0
                    ? result.suggestions.strengths.map(skill => (

                      <div
                        key={skill}
                        className="bg-green-50 rounded-lg px-4 py-3 mb-3"
                      >
                        ✅ {skill}
                      </div>

                    ))
                    : (
                      <p>No strengths detected.</p>
                    )
                }

              </div>

              <div>

                <h3 className="text-red-600 font-bold text-xl mb-4">
                  📚 Needs Improvement
                </h3>

                {
                  result?.suggestions?.improvements?.length > 0
                    ? result.suggestions.improvements.map(skill => (

                      <div
                        key={skill}
                        className="bg-red-50 rounded-lg px-4 py-3 mb-3"
                      >
                        📌 {skill}
                      </div>

                    ))
                    : (
                      <p>Great job! No major weaknesses.</p>
                    )
                }

              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Results