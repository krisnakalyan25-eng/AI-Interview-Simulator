const mongoose = require("mongoose")

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MangoDB Connected")
  } catch (error) {
    console.error("MangoDB Conncetion Failled", error.message)
    process.exit(1)
  }
}
module.exports = connectDB