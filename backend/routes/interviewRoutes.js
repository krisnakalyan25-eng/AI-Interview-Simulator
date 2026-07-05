const express = require("express")

const router = express.Router()

const protect = require("../middleware/authMiddleware")

const {
  getInterviews, submitInterview, getInterviewProgress, deleteInterview, getDashboard
} = require("../controllers/interviewController")

router.get(
  "/",
  protect,
  getInterviews
)
router.put(
  "/submit/:interviewId",
  protect,
  submitInterview
)

router.patch(
  "/:interviewId/submit",
  protect,
  submitInterview
)

router.get(
  "/:interviewId/progress",
  protect,
  getInterviewProgress
)

router.delete(
  "/:interviewId",
  protect,
  deleteInterview
)

router.get(
  "/dashboard",
  protect,
  getDashboard
)

module.exports = router