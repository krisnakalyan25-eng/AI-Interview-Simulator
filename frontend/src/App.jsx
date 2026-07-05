import { Toaster } from "react-hot-toast"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Interview from "./pages/Interview"
import Results from "./pages/Results"
import Interviews from "./pages/Interviews"

import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={<Register />}
          />



          <Route
            path="/interview/:interviewId"
            element={
              <ProtectedRoute>
                <Interview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results/:interviewId"
            element={
              <ProtectedRoute>
                <Results />
              </ProtectedRoute>
            }
          />
          <Route
            path="/interviews"
            element={
              <ProtectedRoute>
                <Interviews />
              </ProtectedRoute>
            }
          />


        </Routes>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#1f2937",
              color: "#fff",
              fontWeight: "500"
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff"
              }
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff"
              }
            }
          }}
        />
      </BrowserRouter>


    </>
  )
}

export default App