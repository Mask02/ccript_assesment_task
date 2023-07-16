const mongoos = require("mongoose");

const UserAcountSchema = new mongoos.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoos.model("Account", UserAcountSchema);
