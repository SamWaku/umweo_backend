const taskController = require("../controllers/task-controller");

const router = require("express").Router();

// create task
router.post("/", taskController.CreateTask);

// get task by id
router.get("/:id", taskController.GetTaskById);

// update task by id
router.put("/:id", taskController.UpdateTaskById);

// delete task by id
router.delete("/:id", taskController.DeleteTaskById);

module.exports = router;
