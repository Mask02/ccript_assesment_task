const TodoModule = require("../models/ToDo");

module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModule.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  TodoModule.create({ text })
    .then((data) => {
      console.log("Todo added");
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
