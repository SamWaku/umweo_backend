const { prisma } = require("../config/db");

const ScheduleRepository = () => {
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
