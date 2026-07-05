const mongoose = require("mongoose")

const interviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },

  totalQuestions: {
    type: Number,
    default: 0
  },

  averageScore: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: ["in-progress", "completed"],
    default: "in-progress"
  },
  completedAt: {
    type: Date,
    default: null
  }

}, {
  timestamps: true
})

module.exports =
  mongoose.model(
    "Interview",
    interviewSchema
  )