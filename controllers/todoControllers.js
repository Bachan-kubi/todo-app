const model = require("../models/model");

// get todo route
module.exports.getTodo = async (req, res) => {
  const toDo = await model.find();
  res.send(toDo);
};

// post
module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  model.create({ text }).then((data) => {
    console.log("Added Succesfully...!");
    console.log(data);
    res.send(data);
    console.log(req);
  });
};

// edit controller
module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  model.findByIdAndUpdate(_id, { text }).then((data) => {
    console.log("updated Succesfully...!");
    console.log(data);
    res.send(data);
  });
};

// delete controller

module.exports.deleteTodo = async (req, res) => {
    console.log(req);
  const { _id } = req.body;
  model.findByIdAndDelete(_id).then((data) => {
    console.log("Deleted Succesfully...!", _id);
    res.send(data);
    
  });
};
