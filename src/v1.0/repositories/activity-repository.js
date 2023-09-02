const { prisma } = require("../config/db");

const ActivityRepository = () => {
  // create activity
  const CreateActivity = async (data) => {
    return prisma.activity.create({
      data,
    });
  };

  // get activity by ID
  const GetActivityByID = async (id) => {
    return prisma.activity.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  // update activity by ID 
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
