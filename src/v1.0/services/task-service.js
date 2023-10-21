const taskRepository = require("../repositories/task-repository");

const TaskService = () => {
  // get all tasks
  const getAllTasks =async() => { 
    return await taskRepository.getAllTasks();
  }

  // Create task
  const createTask = async (title,description,userId,therapistId) => {
    const task = await taskRepository.createTask(title,description,userId,therapistId);
    return task;
  };

  // Get tasks
  const getTasks = async () => {
    const tasks = await taskRepository.getTasks();
    return tasks;
  };

  // Get task by id
  const getTaskById = async (id) => {
    const task = await taskRepository.getTaskById(id);
    return task;
  };

  // Update task by id
  const updateTask = async (id, data) => {
    const updatedTask = await taskRepository.updateTask(id, data);
    return updatedTask;
  };

  // Delete task by id
  const deleteTask = async (id) => {
    await taskRepository.deleteTaskById(id);
  };

  return {
    getAllTasks,
    createTask,
    getTaskById,
    getTasks,
    updateTask,
    deleteTask,
  };
};

module.exports = TaskService;
