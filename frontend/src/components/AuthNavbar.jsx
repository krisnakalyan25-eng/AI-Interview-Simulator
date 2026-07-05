import { Link } from "react-router-dom"

function AuthNavbar() {
  return (
    <div className="flex justify-between items-center px-8 py-5 bg-white border-b shadow-sm">

      <Link
        to="/"
        className="text-3xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition"
      >
        AI Interviewer
      </Link>

      <Link
        to="/"
        className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
      >
        🏠 Home
      </Link>

    </div>
  )
}

export default AuthNavbar