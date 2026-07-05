// controllers/answerController.js
const mongoose = require("mongoose")
const Answer = require("../models/Answer")
const Question = require("../models/Question")
const evaluateAnswer = require("../utils/evaluateAnswer")
const Interview = require('../models/Interview')

async function submitAnswer(req, res) {
  try {


    const { questionId, answerText } = req.body

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      return res.status(400).json({
        message: "Invalid Question ID"
      })
    }

    const question = await Question.findById(questionId)

    if (!question) {
      return res.status(404).json({
        message: "Question Not Found"
      })
    }

    // const answer = await Answer.create({
    //   user: req.user._id,
    //   question: questionId,
    //   answerText
    // })
    // const aiResponse =
    //   await evaluateAnswer(
    //     question.question,
    //     answerText
    //   )

    // console.log(aiResponse)
    // const existingAnswer = await Answer.findOne({
    //   user: req.user._id,
    //   question: questionId
    // })
    const existingAnswer = await Answer.findOne({
      interview: question.interview,
      user: req.user._id,
      question: questionId
    })

    if (existingAnswer) {
      return res.status(400).json({
        message: "You already answered this question"
      })
    }

    // const aiResponse = await evaluateAnswer(
    //   question.question,
    //   answerText
    // )
    // console.log(typeof aiResponse)
    // const parsedResponse = JSON.parse(aiResponse)
    // console.log("Parsed Response:", parsedResponse)
    const aiResponse = await evaluateAnswer(
      question.question,
      answerText
    )

    console.log("AI Response:", aiResponse)

    const answer = await Answer.create({
      user: req.user._id,
      interview: question.interview,
      question: questionId,
      answerText,
      score: Number(aiResponse.score,),
      feedback: aiResponse.feedback
    })
    const answers =
      await Answer.find({
        interview: question.interview
      })

    // console.log("Received:", req.body)
    // console.log("Question ID:", questionId)
    // console.log("Answer:", answerText)

    const totalScore =
      answers.reduce(
        (sum, item) => sum + item.score,
        0
      )

    const averageScore =
      totalScore / answers.length

    await Interview.findByIdAndUpdate(
      question.interview,
      {
        averageScore
      }
    )

    const interview =
      await Interview.findById(
        question.interview
      )

    if (
      answers.length ===
      interview.totalQuestions
    ) {
      interview.status =
        "completed"

      await interview.save()
    }

    // console.log("Created Answer:", answer)

    res.status(201).json({
      message: "Answer Evaluated Successfully",
      answer
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  submitAnswer
}