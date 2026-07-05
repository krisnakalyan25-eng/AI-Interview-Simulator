
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Navbar from "../components/Navbar"
import PageLoader from "../components/PageLoader"
import Spinner from "../components/Spinner"
import { getQuestions } from "../services/questionService"
import { submitAnswer } from "../services/answerService"
import { useNavigate, useParams } from "react-router-dom"

import {
  submitInterview,
  getInterviewProgress
} from "../services/interviewService"


function Interview() {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(true)
  const [answer, setAnswer] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const { interviewId } = useParams()
  const navigate = useNavigate()
  console.log("Interview ID:", interviewId)
  useEffect(() => {
    async function fetchQuestions() {
      try {
        console.log("Fetching interview:", interviewId)

        const data = await getQuestions(interviewId)

        console.log("Questions:", data)

        setQuestions(data.questions || [])

        const progress =
          await getInterviewProgress(interviewId)

        // setCurrentQuestion(progress.currentQuestion)
        const index = Math.min(
          progress.currentQuestion,
          data.questions.length - 1
        )

        setCurrentQuestion(index)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    if (interviewId) {
      fetchQuestions()
    }
  }, [interviewId])
  const question = questions?.[currentQuestion]

  // const handleNext = () => {
  //   setAnswer("")

  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(prev => prev + 1)
  //   }
  // }
  const handleNext = async () => {

    if (!answer.trim()) {
      toast.error("Please enter your answer.")

      return
    }

    try {
      console.log("Current Question Index:", currentQuestion)
      console.log("Current Question ID:", question._id)
      console.log("Submitting answer:", answer)
      setSubmitting(true)

      await submitAnswer({

        questionId: question._id,

        answerText: answer

      })

      setAnswer("")

      if (currentQuestion < questions.length - 1) {

        setCurrentQuestion(prev => prev + 1)

      } else {

        // navigate(`/results/${interviewId}`)
        await submitInterview(interviewId)
        toast.success("Interview submitted successfully!")
        navigate(`/results/${interviewId}`)
        // Next feature:
        // submitInterview()
        // navigate("/results")

      }

    } catch (error) {

      console.log(error)

      const message = error.response?.data?.message

      if (message === "You already answered this question") {

        toast.success(message)

        setAnswer("")

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1)
        } else {
          navigate(`/results/${interviewId}`)
        }

        return
      }

      toast.error(
        message || "Something went wrong"
      )
    } finally {

      setSubmitting(false)

    }

  }

  const handlePrevious = () => {

    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }

  }
  if (loading) {
    return (
      <>
        <Navbar />
        <PageLoader text="Loading Interview Questions..." />
      </>
    )
  }

  if (!questions.length) {
    return (
      <>
        <Navbar />
        <div className="p-8">No questions found</div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow">

            {/* Header */}
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">
                Question {currentQuestion + 1}
              </h2>

              <p>{questions.length} Total</p>
            </div>

            {/* Skill badge */}
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {question?.skill || "General"}
            </span>

            {/* Question */}
            <h3 className="text-2xl font-semibold mt-5 mb-8">
              {question?.question}
            </h3>
          </div>

          {/* Answer box */}
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="
    w-full
    h-40
    mt-8
    border
    rounded-xl
    p-4
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    resize-none
  "
          />

          {/* Next button */}
          <div className="flex justify-between mt-8">

            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="
      px-6
      py-3
      bg-gray-300
      rounded-lg
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={submitting}
              className="
    bg-blue-600
    hover:bg-blue-700
    disabled:bg-gray-400
    text-white
    px-6
    py-3
    rounded-lg
  "
            >
              {submitting ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  <span>Submitting...</span>
                </div>
              ) : currentQuestion === questions.length - 1 ? (
                "Submit Interview"
              ) : (
                "Next →"
              )}
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Interview