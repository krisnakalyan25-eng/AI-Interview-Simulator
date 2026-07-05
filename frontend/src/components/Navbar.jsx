
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/", { replace: true })
  }
  // className =

  const linkClass =
    "flex items-center px-4 py-2 rounded-xl font-semibold text-slate-700 bg-gradient-to-r from-blue-300 to-indigo-100 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm"

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to={token ? "/profile" : "/"}
          className="text-3xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition"
        >
          AI Interviewer
        </Link>

        <div className="flex gap-6 items-center">

          {token && (
            <Link to="/profile" className={linkClass}>
              Profile
            </Link>
          )}

          {token && (
            <Link to="/interviews" className={linkClass}>
              History
            </Link>
          )}

          {!token && (
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-200"
            >
              Login
            </Link>
          )}

          {!token && (
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow transition-all duration-200"
            >
              Register
            </Link>
          )}

          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar