
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import { loginUser } from "../services/authService";
import AuthNavbar from "../components/AuthNavbar";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
      console.log("Sending request...");

      const data = await loginUser({
        email,
        password,
      });

      console.log("Response:", data);

      localStorage.setItem("token", data.token);
      toast.success("Welcome back!")
      navigate("/profile");
    } catch (error) {
      console.log("ERROR:", error);
      toast.error(
        error.response?.data?.message ||
        "Login failed."
      )
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="min-h-screen flex justify-center items-center bg-slate-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
        >
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500 mt-3">
              Login to continue your AI interview preparation.
            </p>

          </div>


          {/* <h2 className="text-3xl font-bold text-center">
            Login
          </h2> */}


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
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
            required
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
              required
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
            type="submit"
            className="w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                py-3
                rounded-xl
                shadow-md
                hover:shadow-lg
                transition-all
                duration-200"
          >
            Login
          </button>


          <div className="text-center pt-4 border-t">

            <p className="text-gray-600">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>

            </p>

          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

