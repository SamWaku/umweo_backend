const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const TaskRepository = () => {
  // Create task
  const createTask = async (data) => {
    return prisma.tasks.create({
      data,
    });
  };

  // Get tasks
  const getTasks = async () => {
    return prisma.tasks.findMany();
  };

  // Get task by id
  const getTaskById = async (id) => {
    return prisma.tasks.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  // Update task by id
  const updateTask = async (id, data) => {
    return prisma.tasks.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };

  // Delete task by id
  const deleteTaskById = async (id) => {
    return prisma.tasks.delete({
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
