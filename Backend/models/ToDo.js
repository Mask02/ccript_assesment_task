const mongoos = require("mongoose");

const todoSchema = new mongoos.Schema({
  text: {
    type: String,
    require: true,
  },
  todCreatedAt: {
    type: Date,
    default: Date.now,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoos.model("ToDo", todoSchema);
