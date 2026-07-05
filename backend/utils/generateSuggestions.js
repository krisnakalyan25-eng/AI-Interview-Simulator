function generateSuggestions(answers) {

  const strengths = []
  const improvements = []

  answers.forEach(answer => {

    if (answer.score >= 8) {
      strengths.push(answer.question.skill)
    } else {
      improvements.push(answer.question.skill)
    }

  })

  return {

    strengths: [...new Set(strengths)],

    improvements: [...new Set(improvements)]

  }

}

module.exports = generateSuggestions