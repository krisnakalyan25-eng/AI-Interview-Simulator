const fs = require("fs")
const pdfParse = require("pdf-parse")
console.log("TYPE:", typeof pdfParse);
console.log("VALUE:", pdfParse);
console.log(typeof pdfParse)
async function extractResumeText(filePath) {
  const dataBuffer = fs.readFileSync(filePath)
  const data = await pdfParse(dataBuffer)

  return data.text
}

module.exports = extractResumeText