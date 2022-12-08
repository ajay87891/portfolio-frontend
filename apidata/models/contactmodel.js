import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema(
  {
  firstname: String,
  lastname: String,
  phone: String,
  subject: String,
  message: String,
  email: String
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)