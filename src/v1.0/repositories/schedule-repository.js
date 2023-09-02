const { prisma } = require("../config/db");

const ScheduleRepository = () => {

  // get schedule by ID
  const getScheduleById = async (id) => {
    return prisma.schedule.findUnique({
      where: {
        id:parseInt(id)
      },
    });
  };
  const createSchedule = (data) => {
    return prisma.schedule.create({
      data,
    });
  };
  const updateSchedule = (id, data) => {
    return prisma.schedule.update({
      where: {
        id:parseInt(id)
      },
      data,
    });
  };
  const deleteScheduleById = async (id) => {
    return prisma.schedule.delete({
      where: {
        id:parseInt(id)
      },
    });
  };
  return {
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteScheduleById
  };
};

module.exports = ScheduleRepository();
