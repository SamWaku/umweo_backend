// TaskControllerHandler->TaskController->ServiceContainer->..nservice

const ServiceContainer = require('../services');
const TaskRouter = require("express").Router();
const TaskController = require("../controllers/task-controller");
const TaskControllerHandler = TaskController(ServiceContainer);

// create task /tasks
TaskRouter.post("/:therapistId", (req, res) => 
    TaskControllerHandler.CreateTask(req, res)
);

// get task by id /tasks/:id
TaskRouter.get("/:id", (req, res) => 
    TaskControllerHandler.GetTaskById(req,res)
);

// get tasks by id /tasks
TaskRouter.get("/", (req, res) => 
    TaskControllerHandler.GetTasks(req, res)
);

// update task by id /tasks/:id
TaskRouter.put("/:id", (req,res) => 
    TaskControllerHandler.UpdateTaskById(req, res)
);

// delete task by id /tasks/:id
TaskRouter.delete("/:id", (req,res) =>
    TaskControllerHandler.DeleteTaskById(req, res)
);

module.exports = TaskRouter;
