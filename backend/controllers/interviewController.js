const Interview = require("../models/Interview")
const Answer = require('../models/Answer')
const Question = require("../models/Question")

async function getInterviews(req, res) {
  try {

    const interviews = await Interview.find({
      user: req.user._id
    })
      .sort({ createdAt: -1 })

    res.status(200).json({
      interviews
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}

async function getDashboard(req, res) {

  try {

    const interviews = await Interview.find({
      user: req.user._id
    })

    const totalInterviews = interviews.length

    const completed = interviews.filter(
      i => i.status === "completed"
    ).length

    const inProgress = interviews.filter(
      i => i.status === "in-progress"
    ).length

    const totalQuestions = interviews.reduce(
      (sum, i) => sum + i.totalQuestions,
      0
    )

    const totalScore = interviews.reduce(
      (sum, i) => sum + i.averageScore,
      0
    )

    const averageScore =
      completed > 0
        ? (totalScore / completed).toFixed(1)
        : 0

    res.json({
      totalInterviews,
      completed,
      inProgress,
      totalQuestions,
      averageScore
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}
async function submitInterview(req, res) {
  try {

    const { interviewId } = req.params

    const interview =
      await Interview.findById(interviewId)

    if (!interview) {
      return res.status(404).json({
        message: "Interview Not Found"
      })
    }

    const answers =
      await Answer.find({
        interview: interviewId
      })

    const totalScore =
      answers.reduce(
        (sum, item) => sum + item.score,
        0
      )

    const averageScore =
      answers.length > 0
        ? totalScore / answers.length
        : 0

    interview.averageScore =
      averageScore

    interview.status =
      "completed"

    interview.completedAt = new Date()

    await interview.save()

    res.status(200).json({
      message: "Interview Submitted",
      interview
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}

async function getInterviewProgress(req, res) {
  try {

    const { interviewId } = req.params

    const interview = await Interview.findOne({
      _id: interviewId,
      user: req.user._id
    })

    if (!interview) {
      return res.status(404).json({
        message: "Interview not found"
      })
    }

    const answers = await Answer.find({
      interview: interviewId,
      user: req.user._id
    }).select("question")

    res.status(200).json({
      currentQuestion: answers.length,
      answeredQuestions: answers.map(a => a.question)
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}

async function deleteInterview(req, res) {

  try {

    const { interviewId } = req.params

    const interview = await Interview.findOne({
      _id: interviewId,
      user: req.user._id
    })

    if (!interview) {
      return res.status(404).json({
        message: "Interview Not Found"
      })
    }

    await Answer.deleteMany({
      interview: interviewId
    })

    await Question.deleteMany({
      interview: interviewId
    })

    await Interview.findByIdAndDelete(interviewId)

    res.json({
      message: "Interview Deleted Successfully"
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


module.exports = {
  getInterviews,
  submitInterview,
  getInterviewProgress,
  deleteInterview,
  getDashboard
}