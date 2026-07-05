const Resume = require("../models/Resume")
const Question = require("../models/Question")
const generateQuestions = require('../utils/generateQuestions')
const Interview = require("../models/Interview")

async function createQuestions(req, res) {
  try {
    const resume = await Resume.findOne({
      user: req.user._id
    }).sort({ createdAt: -1 })

    if (!resume) {
      return res.status(404).json({
        message: "Resume Not Found"
      })
    }

    await Question.deleteMany({
      user: req.user._id
    })

    const interview = await Interview.create({
      user: req.user._id,
      status: "in-progress"
    })
    const questionsData = await generateQuestions(resume.resumeText)
    interview.totalQuestions =
      questionsData.length

    await interview.save()
    // Save Questions

    const saveQuestions = []

    for (const item of questionsData) {
      const question = await Question.create({
        user: req.user._id,
        interview: interview._id,
        skill: item.skill,
        question: item.question
      })
      saveQuestions.push(question)


    }
    await Interview.findByIdAndUpdate(
      interview._id,
      {
        totalQuestions: saveQuestions.length
      }
    )

    // res.status(200).json({
    //   message: "Questions Generated Successfully",
    //   questions: saveQuestions
    // })


    res.status(200).json({
      message: "Questions Generated Successfully",
      interviewId: interview._id,
      totalQuestions: saveQuestions.length
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

}

// async function getQuestions(req, res) {
//   try {

//     const questions = await Question.find({
//       user: req.user._id
//     })

//     res.status(200).json({
//       questions
//     })

//   } catch (error) {

//     res.status(500).json({
//       message: error.message
//     })

//   }
// }

async function getQuestions(req, res) {
  try {

    const { interviewId } = req.params

    const questions = await Question.find({
      interview: interviewId,
      user: req.user._id
    })

    res.status(200).json({
      questions
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}
module.exports = { createQuestions, getQuestions }