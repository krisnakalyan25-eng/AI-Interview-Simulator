// routes/answerRoutes.js

const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { submitAnswer } = require("../controllers/answerController")

router.post("/", protect, submitAnswer)

module.exports = router