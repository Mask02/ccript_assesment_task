const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/toDoController");

const router = Router();

router.get("/", getToDo);
router.get("/add", saveToDo);

module.exports = router;
