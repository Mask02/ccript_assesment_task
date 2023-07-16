const AccountModule = require("../models/userAccount");

module.exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  const cheek = await AccountModule.findOne({ email: email });
  if (cheek) {
    res.json("exists");
  } else if (!cheek) {
    res.json("notexist");
    await AccountModule.insertMany([data]);
  } else {
    res.send("error");
  }
};

module.exports.signIn = async (req, res) => {
  const { email } = req.body;

  const cheek = await AccountModule.findOne({ email: email });
  if (cheek) {
    AccountModule.findOne({ email: email }).then((data) => {
      res.json(data);
    });
  } else if (!cheek) {
    res.json("notexist");
  } else {
    res.send("error");
  }
};
