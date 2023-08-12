const express = require('express')
const app = express()
const usersData = require("./data/index")
app.use(express.json)



const port = process.env.PORT || 4000

// routes

// GET: Return all users
app.get('/usersData', (req, res) => {
  console.log("GET /usersData")
  res.json(usersData)
})

/************************************/

// GET by ID: Return just the user that matches the path param (id)


/************************************/

// POST: Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. 

//Currently we have users 1-10 (_data/index_). The next user should be 11

/************************************/

// PUT: Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request


/************************************/

// DELETE: Delete one user by its id




/************************************/

app.listen(port, () => {
  console.log('app is listening on:', port)
})


