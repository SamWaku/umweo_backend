const taskRepository = require("../repositories/task-repository");


const TaskService = () => {
  const createTask = async (data) => {
    const task = await taskRepository.createTask(data);
    return task;
  };
  const getTaskById = async (id) => {
    const task = await taskRepository.getTaskById(id);
    return task;
  };
  const updateTask = async (data) => {
    const updatedTask = await taskRepository.updateTask(data);
    return updatedTask;
  };
  const deleteTask = async (id) => {
    await taskRepository.deleteTaskById(id);
  };
  return {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
  };
};

module.exports = TaskService();
