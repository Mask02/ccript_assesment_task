const TodoModule = require("../models/ToDo");

module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModule.find();
  res.json(toDo);
};

module.exports.addToDo = async (req, res) => {
  const { text } = req.body;
  const currentDate = new Date();
  const status = false;
  await TodoModule.create({ text, currentDate, status })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.setToDoStatus = async (req, res) => {
  const { status, id } = req.body;
  TodoModule.findByIdAndUpdate(status, id)
    .then((data) => {
      res.json(data);
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
