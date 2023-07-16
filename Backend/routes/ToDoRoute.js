const { Router } = require("express");
const {
  getToDo,
  deleteToDo,
  addToDo,
  setToDoStatus,
} = require("../controllers/toDoController");
const { signIn, signUp } = require("../controllers/accountController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.post("/delete", deleteToDo);
router.post("/update", setToDoStatus);
router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;
