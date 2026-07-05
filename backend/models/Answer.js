// models/Answer.js

const mongoose = require("mongoose")

const answerSchema = mongoose.Schema({

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

  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },

  answerText: {
    type: String,
    required: true
  },

  score: {
    type: Number,
    default: null
  },

  feedback: {
    type: String,
    default: null
  }

}, {
  timestamps: true
})
module.exports = mongoose.model(
  "Answer",
  answerSchema
)