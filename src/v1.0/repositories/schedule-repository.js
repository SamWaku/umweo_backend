const { ScheduleModel } = require("../models/schedule-model");

const ScheduleRepository = () => {
  
  // get all schedules
  const getAllSchedules = async () => {
    return ScheduleModel.findMany();
  };

  // get schedule by ID
  const getScheduleById = async (id) => {
    return ScheduleModel.findUnique({
      where: {
        id:parseInt(id)
      },
    });
  };
  
  // post schedule
  const createSchedule = (data) => {
    return ScheduleModel.create({
      data,
    });
  };

  // update schedule by ID 
  const updateSchedule = (id, data) => {
    return ScheduleModel.update({
      where: {
        id:parseInt(id)
      },
      data,
    });
  };

  // delete schedule by ID
  const deleteScheduleById = async (id) => {
    return ScheduleModel.delete({
      where: {
        id:parseInt(id)
      },
    });
  };
  return {
    getAllSchedules,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteScheduleById
  };
};

module.exports = ScheduleRepository();
