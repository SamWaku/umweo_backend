const taskController = require("../controllers/task-controller");

const router = require("express").Router();

// create task /tasks
router.post("/", taskController.CreateTask);

// get task by id /tasks/:id
router.get("/:id", taskController.GetTaskById);

// get tasks by id /tasks
router.get("/", taskController.GetTasks);

// update task by id /tasks/:id
router.put("/:id", taskController.UpdateTaskById);

// delete task by id /tasks/:id
router.delete("/:id", taskController.DeleteTaskById);

module.exports = router;
