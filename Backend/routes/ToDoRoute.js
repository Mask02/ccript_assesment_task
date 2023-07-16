const { Router } = require("express");
const {
  getToDo,
  deleteToDo,
  addToDo,
  setToDoStatus,
} = require("../controllers/toDoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.post("/delete", deleteToDo);
router.post("/update", setToDoStatus);

module.exports = router;
