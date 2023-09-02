const { prisma } = require("../config/db");

const ActivityRepository = () => {
  const CreateActivity = async (data) => {
    return prisma.activity.create({
      data,
    });
  };

  const GetActivityByID = async (id) => {
    return prisma.activity.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  const UpdateActivityByID = async (id, data) => {
    return prisma.activity.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };

  const DeleteActivityByID = async (id) => {
    return prisma.activity.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    CreateActivity,
    GetActivityByID,
    UpdateActivityByID,
    DeleteActivityByID,
  };
};

module.exports = ActivityRepository();
