// routes/resultRoutes.js

const express = require("express")
const router = express.Router()

const protect = require("../middleware/authMiddleware")
const { getResults } =
  require("../controllers/resultController")

// router.get("/", protect, getResults)
// router.get("/:interviewId", protect, getResults)
router.get("/:interviewId", protect, getResults)

module.exports = router