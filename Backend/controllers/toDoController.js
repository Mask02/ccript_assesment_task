const TodoModule = require("../models/ToDo");

module.exports.getToDo = async (res) => {
  const toDo = await TodoModule.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  await TodoModule.create({ text })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.body;

  await TodoModule.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.send(err);
    });
};
