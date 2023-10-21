const { TaskModel } = require("../models/task-model");

const TaskRepository = () => {
  //get all tasks
  const getAllTasks =async() => { 
    return await TaskModel.findMany();
  }

  // Create task
  const createTask = async (title,description,userId,therapistId) => {
    return await TaskModel.create({
      data:{
        title,
        description,
        userId,
        therapistId:parseInt(therapistId)
      }
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
    getAllTasks,
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTaskById,
  };
};

module.exports = TaskRepository();
