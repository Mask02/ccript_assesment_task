const mongoos = require("mongoose");

const todoSchema = new mongoos.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoos.model("ToDo", todoSchema);
