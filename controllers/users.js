const usersData = require("../data/index")


const listUsers =  (req, res) => {
    console.log("GET /usersData");
    res.json(usersData);
  }


  const showUser = (req, res) => {
    let myId = req.params.id;
  
    let matchingItem = usersData.find((item, index) => {
      return item.id == myId;
    });
    if (matchingItem) {
      res.json(matchingItem);
    } else {
      res.sendStatus(404);
    }
  }

  const createUser = (req, res) => {
    const newUser = {
      id: usersData.length + 1,
      ...req.body,
    };
  
    usersData.push(newUser);
    res.json(usersData);
  }


const updateUser = (req, res) => {
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
  }
 
const  deleteUser = (req, res) => {
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
    res.json({ deletedUser, usersData });
  }

  module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser,
  }