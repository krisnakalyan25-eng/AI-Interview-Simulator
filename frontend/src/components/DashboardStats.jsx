import { useEffect, useState } from "react"
import {
  Briefcase,
  CheckCircle,
  Clock,
  FileQuestion,
  Trophy
} from "lucide-react"

import { getDashboard } from "../services/interviewService"

function DashboardStats() {

  const [stats, setStats] = useState(null)

  useEffect(() => {

    async function fetchData() {
      try {
        const data = await getDashboard()
        setStats(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

  }, [])

  if (!stats) {
    return (
      <div className="text-center py-10">
        Loading dashboard...
      </div>
    )
  }

  return (

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">

      <Card
        icon={<Briefcase size={28} />}
        title="Interviews"
        value={stats.totalInterviews}
        color="bg-blue-100 text-blue-600"
      />

      <Card
        icon={<CheckCircle size={28} />}
        title="Completed"
        value={stats.completed}
        color="bg-green-100 text-green-600"
      />

      <Card
        icon={<Clock size={28} />}
        title="In Progress"
        value={stats.inProgress}
        color="bg-yellow-100 text-yellow-600"
      />

      <Card
        icon={<FileQuestion size={28} />}
        title="Questions"
        value={stats.totalQuestions}
        color="bg-purple-100 text-purple-600"
      />

      <Card
        icon={<Trophy size={28} />}
        title="Avg Score"
        value={stats.averageScore}
        color="bg-orange-100 text-orange-600"
      />

    </div>

  )

}

function Card({ title, value, icon, color }) {

  return (

    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition">

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}>
        {icon}
      </div>

      <h3 className="text-gray-500 mt-5">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

    </div>

  )

}

export default DashboardStats