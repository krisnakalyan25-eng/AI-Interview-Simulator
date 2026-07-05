const { default: mongoose } = require('mongoose')


const resumeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  resumeText: {
    type: String
  }

}, { timestamps: true }
)

module.exports = mongoose.model(
  "Resume",
  resumeSchema
)