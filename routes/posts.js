// this is the post route
const express = require("express");
// const error = require("../utilities/error");
const posts = require("../data/posts");

const router = express.Router();

/**
 * GET /api/posts
 */

// changed the data to match the form's input
router
  .route("/")
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
    if (req.body.firstname && req.body.lastname && req.body.email) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        lastname: req.body.firstname,
        firstname: req.body.lastname,
        email: req.body.email,
      };

      posts.push(posts);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

module.exports = router;
