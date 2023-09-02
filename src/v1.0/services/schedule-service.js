const ScheduleRepository = require("../repositories/schedule-repository");

const ScheduleService = () => {
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
