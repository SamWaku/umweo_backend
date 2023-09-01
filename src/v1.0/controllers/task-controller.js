const taskService = require("../services/task-service");

const TaskController = () => {
  const CreateTask = async (req, res) => {
    try {
      const task = await taskService.createTask(req.body);
      res.status(200).json(task);
    } catch (error) {
        res.status(400).json(error);
    }
  };
};
