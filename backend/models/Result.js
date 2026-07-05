const mongoose = require("mongoose")

const resultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },

    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
      required: true
    },

    totalQuestions: Number,

    attemptedQuestions: Number,

    totalScore: Number,

    averageScore: Number,

    percentage: Number,

    overallFeedback: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Result", resultSchema)