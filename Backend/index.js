const express = require("express");
const mongoos = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const routes = require("./routes/ToDoRoute");
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors);

mongoos
  .connect(process.env.MONGOODB_URL)
  .then(() => {
    console.log("Connected to Mongoo db");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(routes);

app.listen(port, () => {
  console.log(`TODO APP listening on port ${port}`);
});
