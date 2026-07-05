const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { createQuestions, getQuestions } = require("../controllers/questionController")

router.post('/generate', protect, createQuestions)
// router.get('/', protect, getQuestions)
router.get("/:interviewId", protect, getQuestions)
module.exports = router