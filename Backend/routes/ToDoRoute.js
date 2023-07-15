const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
} = require("../controllers/toDoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", saveToDo);
router.post("/delete", deleteToDo);

module.exports = router;
