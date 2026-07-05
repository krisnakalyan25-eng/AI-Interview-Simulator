// controllers/resultController.js

const Answer = require("../models/Answer")
const generateSuggestions =
  require("../utils/generateSuggestions")
async function getResults(req, res) {
  try {
    const { interviewId } = req.params

    const answers = await Answer.find({
      user: req.user._id,
      interview: interviewId
    }).populate("question")

    // await Answer.deleteMany({
    //   score: null
    // })
    // console.log(
    //   answers.map(a => ({
    //     id: a._id,
    //     score: a.score
    //   }))
    // )
    const evaluatedAnswers = answers.filter(
      answer => answer.score !== null
    )

    const totalQuestions = evaluatedAnswers.length

    const totalScore = evaluatedAnswers.reduce(
      (sum, answer) => sum + answer.score,
      0
    )

    const averageScore =
      totalQuestions > 0
        ? totalScore / totalQuestions
        : 0
    const suggestions =
      generateSuggestions(evaluatedAnswers)

    res.status(200).json({
      totalQuestions,
      totalScore,
      averageScore,
      answers,
      suggestions,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getResults
}