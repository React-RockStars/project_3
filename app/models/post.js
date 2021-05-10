const mongoose = require('mongoose')
const commentSchema = require('./comment')
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [commentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
},
{
  timestamps: true
})
module.exports = mongoose.model('Post', postSchema)
