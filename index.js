//brings in all the function we need from express module
const express = require("express");
//create an application object that uses express
const app = express();
const usersRouter = require("./routes/users")
const usersData = require("./data/index");
const sampleUser = require("./data/sampleUser");
// makes sure all data passing back and forth is in json format
app.use(express.json());
app.use('/users-data', usersRouter)

// port we'll communicate through
const port = process.env.PORT || 4000;

// routes start here below

// GET: Return all users
app.get("/usersData", (req, res) => {
  console.log("GET /usersData");
  res.json(usersData);
});

/************************************/

// GET by ID: Return just the user that matches the path param (id)

app.get("/usersData/:id", (req, res) => {
  let myId = req.params.id;

  let matchingItem = usersData.find((item, index) => {
    return item.id == myId;
  });
  if (matchingItem) {
    res.json(matchingItem);
  } else {
    res.sendStatus(404);
  }
});

/************************************/

// POST: Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list.

//Currently we have users 1-10 (_data/index_). The next user should be 11

app.post("/sampleUser", (req, res) => {
  const newUser = {
    id: usersData.length + 1,
    ...req.body,
  };

  usersData.push(newUser);
  res.json(usersData);
});

/************************************/

// PUT: Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// not working properly???

app.put("/usersData/:myId/:num/:name", (req, res) => {
  console.log(req);
  // let { myId, num, name } = req.params
  let myId = req.params.myId;
  // let num = req.params.num
  // let name = req.params.name

  // let {name, address } = req.body
  // console.log(myId,num,name)
  // console.log(name, address)

  let matchingItem = usersData.find((item, index) => {
    return item.id == myId;
  });
  console.log(matchingItem);
  console.log(req.body);

  if (matchingItem) {
    res.json(req.body);
  } else {
    res.send("invalid ID");
  }
});

/************************************/

// DELETE: Delete one user by its id

app.delete("/usersData/:id", (req, res) => {
  // get id from route
  const userId = parseInt(req.params.id, 10); // convert id into interger

  // find the index of the user with the given id in the usersData array
  const userIndex = usersData.findIndex((user) => user.id == userId);

  // if userIndex is -1, it means the user was not found
  if (userIndex === -1) {
    return res.status(404).json({ error: "user not found" });
  }

  // remove the user from the usersData array
  const deletedUser = usersData.splice(userIndex, 1)[0];

  // respond with the deleted user
  res.json({deletedUser, usersData});
});

/************************************/

app.listen(port, () => {
  console.log("app is listening on:", port);
});
