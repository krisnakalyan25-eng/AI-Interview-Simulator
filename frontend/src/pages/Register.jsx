import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import AuthNavbar from "../components/AuthNavbar"
import {
  registerUser
} from "../services/authService"

function Register() {

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [showPassword, setShowPassword] = useState(false);

  const navigate =
    useNavigate()

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault()

    try {

      const data =
        await registerUser({
          name,
          email,
          password
        })

      console.log(data)

      localStorage.setItem(
        "token",
        data.token
      )
      toast.success("Account created successfully!")
      navigate("/profile")

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed."
      )

    }
  }

  return (
    <>
      <AuthNavbar />

      <div
        className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-slate-100
    "
      >
        <form
          onSubmit={handleSubmit}
          className="
        bg-white
        p-8
        rounded-xl
        shadow-lg
        w-full
        max-w-md
        space-y-4
      "
        >

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Create Your Account 🚀
            </h1>

            <p className="text-gray-500 mt-3">
              Start your AI interview journey today.
            </p>

          </div>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    transition"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
      w-full
      border
      border-gray-300
      rounded-xl
      px-4
      py-3
      pr-14
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                        hover:text-blue-600
                      "
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <button
            className="
         w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        rounded-xl
        shadow-md
        hover:shadow-lg
        transition-all
        duration-200
        "
          >
            Register
          </button>
          <div className="text-center pt-4 border-t">

            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>
        </form>
      </div>
    </>
  )
}

export default Register