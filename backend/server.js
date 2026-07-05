
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")

const cors = require('cors')

const connectDB = require('./config/db')
const authRoutes = require("./routes/authRoutes")
const protect = require("./middleware/authMiddleware")
const userRoutes = require('./routes/userRoutes')
const resumeRoutes = require('./routes/resumeRoutes')
const questionRoutes = require('./routes/questionRoutes')
const answerRoutes = require("./routes/answerRoutes")
const resultRoutes = require("./routes/resultRoutes")
const interviewRoutes = require("./routes/interviewRoutes")


connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
  res.send("I'm working")
})

app.use("/api/auth", authRoutes)
app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user
  })
})
app.use("/api/users", userRoutes)
app.use('/api/resume', resumeRoutes)
app.use('/api/questions', questionRoutes)
app.use("/api/answers", answerRoutes)
app.use("/api/results", resultRoutes)
app.use("/api/interviews", interviewRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})