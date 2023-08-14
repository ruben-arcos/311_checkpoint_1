const express = require("express");
const usersData = require("../data/index")
const commentsController = require("../controllers/users");
const usersController = require("../controllers/users")
const router = express.Router();



router.get("/", usersController.listUsers);

/************************************/

// GET by ID: Return just the user that matches the path param (id)

router.get("/:id", usersController.showUser);

/************************************/

// POST: Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list.

//Currently we have users 1-10 (_data/index_). The next user should be 11

router.post("/new-user", usersController.createUser );

/************************************/

// PUT: Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// not working properly???

router.put("/:myId", usersController.updateUser);

/************************************/

// DELETE: Delete one user by its id

router.delete("/:id",usersController.deleteUser );

module.exports = router;
