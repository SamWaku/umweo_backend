const { TaskModel } = require("../models/task-model");

const TaskRepository = () => {
  // Create task
  const createTask = async (data) => {
    return TaskModel.create({
      data,
    });
  };

  // Get tasks
  const getTasks = async () => {
    return TaskModel.findMany();
  };

  // Get task by id
  const getTaskById = async (id) => {
    return TaskModel.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  // Update task by id
  const updateTask = async (id, data) => {
    return TaskModel.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };

  // Delete task by id
  const deleteTaskById = async (id) => {
    return TaskModel.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTaskById,
  };
};

module.exports = TaskRepository();
