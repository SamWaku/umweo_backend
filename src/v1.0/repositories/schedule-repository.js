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
  
  // post schedule
  const createSchedule = (data) => {
    return prisma.schedule.create({
      data,
    });
  };

  // update schedule by ID 
  const updateSchedule = (id, data) => {
    return prisma.schedule.update({
      where: {
        id:parseInt(id)
      },
      data,
    });
  };

  // delete schedule by ID
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
