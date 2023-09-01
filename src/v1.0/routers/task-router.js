const taskController = require("../controllers/task-controller");

const router = require("express").Router();

router.post("/", taskController.CreateTask);
router.get("/:id", taskController.GetTaskById);
router.put("/:id", taskController.UpdateTaskById);

module.exports = router;
