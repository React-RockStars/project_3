Tell-A-Vision

# README
## Tell-A-Vision
Tell-A-Vision is a forum to discuss your favorite TV shows. Once users have registered and logged in, they are taken to the home page where all (if any) previously created posts from all users are displayed. Users have the option to add their own post by clicking on the `Create Post` link in the navbar which will then display a form. After a user has submitted a post they can `edit` or `delete` it. Users may also comment on other users' posts or their own by using the `Add Comment` button. They may also `edit` or `delete` their comment. The view all comments link will display all comments related to that post.
### User Stories:
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to add a post to the message board.
- As a signed in user, I would like to update my post on the message board.
- As a signed in user, I would like to delete my post on the message board.
- As a signed in user, I would like to see all my posts on the message board.
- As a signed in user, I would like to view all other users' posts on the message board.
- As a signed in user, I would like to comment on other users' posts on the message board.
- As a signed in user, I would like to edit my comment on other users' posts on the message board.
- As a signed in user, I would like to delete my comment on other users' posts on the message board.
- Allow users to comment on comments.
### ERD
(https://i.imgur.com/AWBWmoy.png)
- [Logged in view all posts screen](https://imgur.com/gallery/tkIlnOH)

### Routes
- Post Routes
  - GET (/posts)
  - POST (/posts)
  - PATCH (/posts:id)
  - DELETE (/posts:id)
- Comment Routes
  - POST (/comments)
  - PATCH (/comments:commentid)
  - DELETE (/comments:commentid)
### Links
- [Front-End Repo](https://github.com/React-RockStars/project-3-client)
- [Back-End Deployed Site](https://fathomless-tor-63316.herokuapp.com/)
- [Front-End Deployed Site](https://react-rockstars.github.io/project-3-client/)
#### Future Improvements
- Have the `edit` and `delete` buttons on the comments accordian ONLY appear for the owner of the comment
- Additional styling

### Planning Process and Problem Solving Strategy

To keep organized of our project planning, daily tasks and to ensure we were keeping up with our intended deadline our group utilized Trello to manage and track our progress. We assessed our tasks and issue fixes during our morning huddles and our group implemented the technique of “mob-coding” . We took turns sharing screens while the other researched credible sites and resources we have.

### List of Technologies Used:
-Github
-Atom
-Trello
-React
-Node
-Scss
-Bootstrap
-HTML
-MongoDB
-Mongoose
-Express
