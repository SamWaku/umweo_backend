const ScheduleRepository = require("../repositories/schedule-repository");

const ScheduleService = () => {
  // get schedule by ID
  const GetScheduleById = async (id) => {
    const schedule = await ScheduleRepository.getScheduleById(id);
    return schedule;
  };
  const CreateSchedule = async (data) => {
    const schedule = await ScheduleRepository.createSchedule(data);
    return schedule;
  };
  const DeleteSchedule = async (id) => {
    await ScheduleRepository.deleteScheduleById(id);
  };

  // update schedule by ID 
  const UpdateSchedule = async (id, data) => {
    const schedule = await ScheduleRepository.updateSchedule(id, data);
    return schedule;
  };
  return {
    GetScheduleById,
    CreateSchedule,
    DeleteSchedule,
    UpdateSchedule,
  };
};

module.exports = ScheduleService();
