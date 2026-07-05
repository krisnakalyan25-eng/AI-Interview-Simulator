import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getInterviews } from "../services/interviewService"
import { useNavigate } from "react-router-dom"

function History() {
  const [interviews, setInterviews] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchHistory() {
      try {
        const data = await getInterviews()
        setInterviews(data.interviews)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-8">Loading...</div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-3xl font-bold mb-6">
          Interview History
        </h1>

        <table className="w-full bg-white shadow rounded-xl overflow-hidden">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Questions</th>
              <th className="p-4 text-left">Average</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>

          </thead>

          <tbody>

            {
              interviews.map((item) => (

                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {item.totalQuestions}
                  </td>

                  <td className="p-4">
                    {item.averageScore.toFixed(1)}
                  </td>

                  <td className="p-4">
                    {item.status}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() => navigate(`/results/${item._id}`)}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>
    </>
  )
}

export default History