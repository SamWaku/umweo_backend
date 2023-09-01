const taskService = require("../services/task-service");

const TaskController = () => {
  const CreateTask = async (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data!");
      }
      const task = await taskService.createTask(data);
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
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
    UpdateTaskById,
    DeleteTaskById,
  };
};

module.exports = TaskController();
