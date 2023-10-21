const ScheduleRepository = require("../repositories/schedule-repository");

const ScheduleService = () => {
  // get all schedules
  const getAllSchedules = async () => {
    const schedules = await ScheduleRepository.getAllSchedules();
    return schedules;
  };

  // get schedule by ID
  const GetScheduleById = async (id) => {
    const schedule = await ScheduleRepository.getScheduleById(id);
    return schedule;
  };
  
  // post schedule
  const CreateSchedule = async (data) => {
    const schedule = await ScheduleRepository.createSchedule(data);
    return schedule;
  };

  // delete schedule by ID
  const DeleteSchedule = async (id) => {
    await ScheduleRepository.deleteScheduleById(id);
  };

  // update schedule by ID 
  const UpdateSchedule = async (id, data) => {
    const schedule = await ScheduleRepository.updateSchedule(id, data);
    return schedule;
  };
  return {
    getAllSchedules,
    GetScheduleById,
    CreateSchedule,
    DeleteSchedule,
    UpdateSchedule,
  };
};

module.exports = ScheduleService;
