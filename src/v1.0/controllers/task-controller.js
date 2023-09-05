const taskService = require("../services/task-service");

const TaskController = () => {
  //Create task
  const CreateTask = async (req, res) => {
    try {
      const {therapistId}=req.params;
      if (!therapistId) {
        return res.status(400).json("Enter valid ID");
      }
      const {title,description,userId} = req.body;
      if (!title||!description||!userId) {
        return res.status(400).json("Enter valid data!");
      }
      const task = await taskService.createTask(title,description,userId,therapistId);
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // Get task by id
  const GetTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID!");
      }
      const task = await taskService.getTaskById(id);
      if (!task) {
        return res.status(400).json("Task doesn't exist!");
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // Get tasks
  const GetTasks = async (req, res) => {
    try {
      const tasks = await taskService.getTasks();
      if (!tasks) {
        return res.status(400).json("Tasks unavailable");
      }
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // Update task by id
  const UpdateTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID!");
      }
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data!");
      }
      const task = await taskService.updateTask(id, data);
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // Delete task by id
  const DeleteTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID!");
      }
      await taskService.deleteTask(id);
      res.status(200).json("Task Deleted");
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  return {
    CreateTask,
    GetTaskById,
    GetTasks,
    UpdateTaskById,
    DeleteTaskById,
  };
};

module.exports = TaskController();
