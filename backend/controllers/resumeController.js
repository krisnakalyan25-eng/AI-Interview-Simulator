const Resume = require("../models/Resume")
const extractResumeText = require("../utils/extractResumeText")

async function uploadResume(req, res) {
  try {

    const resumeText =
      await extractResumeText(req.file.path)

    // Check if user already has a resume
    const existingResume = await Resume.findOne({
      user: req.user._id
    })

    if (existingResume) {

      // Update existing resume
      existingResume.fileName = req.file.filename
      existingResume.filePath = req.file.path
      existingResume.resumeText = resumeText

      await existingResume.save()

      return res.status(200).json({
        message: "Resume Updated Successfully",
        resume: existingResume
      })
    }

    // Create new resume
    const resume = await Resume.create({
      user: req.user._id,
      fileName: req.file.filename,
      filePath: req.file.path,
      resumeText
    })

    res.status(201).json({
      message: "Resume Uploaded Successfully",
      resume
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}

module.exports = {
  uploadResume
}