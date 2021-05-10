// import our express library
const express = require('express')

// creating a router for this file
const router = express.Router()

// require the Post model so we can interact with our database
const Post = require('../models/post')

// require our function to handle 404 errors
const handle404 = require('../lib/custom_errors')

router.post('/comments', (req, res, next) => {
  // extract the comment from the request's data (body)
  const commentData = req.body.comment

  // extract the postId from the comment data
  const postId = postData.postId

  // find the post by its id
  Post.findById(postId)
    .then(handle404)
    .then(post => {
      // create a new comment in the comments subdocument array using the
      // request's commentData
      post.comments.push(commentData)

      // save the post (which saves the new comment)
      return post.save()
    })
    // responding with the updated post that includes our new comment
    .then(post =>res.status(201).json({ post }))
    .catch(next)
})

router.delete('/posts/:postId', (req, res, next) => {
  // extract the comment's id from the url
  const commentId = req.params.commentId

  // extracting the post's id from the incoming request's data
  const postId = req.body.comment.postId

  Post.findById(postId)
    .then(handle404)
    .then(post => {
      // select the comment subdocument with the id `commentId` (post.comments.id(commentId))
      // then remove it (delete it)
      post.comments.id(commentId).remove()

      // save our deletion
      return post.save()
    })
    // if successfully deleted, respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.patch('/comments/:commentId', (req, res, next) =>{
  const commentId = req.params.commentId

  // extract the comment data from our request's body
  const commentData = req.body.comment
  const postId = commentData.postId

  Post.findById(postId)
    .then(handle404)
    .then(post => {
      // select the comment with the id `commentId`
      const comment = post.comments.id(commentId)

      // update our comment, with the incoming request's data (commentData)
      comment.set(commentData)
      // save our changes, by saving the post
      return post.save()
    })
    .then(() => res.sendStatus(204))
})

// exporting our router, so we can register (mount) our router
module.exports = router
