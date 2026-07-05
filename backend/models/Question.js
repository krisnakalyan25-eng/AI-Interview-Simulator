const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },

  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Interview"
  },
  skill: String,
  question: String,
  difficulty: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Question", questionSchema)