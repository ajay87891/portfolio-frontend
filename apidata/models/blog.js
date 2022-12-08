import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
    {
        user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        title: {
          type: String,
          requird: true,
        },
        description: {
          type: String,
          required: true,
          
        },
        tag: {
          type: String,
          default: "General"
        },
        date: {
          type: Date,
          default: Date.now,
        },
      });

module.exports = mongoose.models.Blog || mongoose.model('Blogs', BlogSchema)