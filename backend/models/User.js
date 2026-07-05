const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    default: ""
  },

  title: {
    type: String,
    default: ""
  },

  location: {
    type: String,
    default: ""
  },

  education: {
    type: String,
    default: ""
  },

  experience: {
    type: String,
    default: ""
  },

  bio: {
    type: String,
    default: ""
  }
}
  , {
    timestamps: true
  })

module.exports = mongoose.model("Users", userSchema)