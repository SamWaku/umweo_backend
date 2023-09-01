const taskRepository = require("../repositories/task-repository");

const TaskService = () => {
  // Create task
  const createTask = async (data) => {
    const task = await taskRepository.createTask(data);
    return task;
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
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
  };
};

module.exports = TaskService();
