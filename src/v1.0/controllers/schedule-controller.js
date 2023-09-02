const scheduleService = require("../services/schedule-service");

const ScheduleController = () => {
  // post schedule
  const CreateSchedule = async (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid Data");
      }
      const schedule = await scheduleService.CreateSchedule(data);
      res.status(200).json(schedule);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  // get schedule by ID
  const GetScheduleByID = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID");
      }
      const schedule = await scheduleService.GetScheduleById(id);
      if (!schedule) {
        return res.status(400).json("Schedule doesn't exist");
      }
      res.status(200).json(schedule);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // update schedule by ID 
  const UpdateScheduleByID = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Invalid ID");
      }
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid Data");
      }
      const UpdatedSchedule = await scheduleService.UpdateSchedule(id, data);
      res.status(200).json(UpdatedSchedule);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // delete schedule by ID
  const DeleteScheduleByID = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Invalid ID");
      }
      await scheduleService.DeleteSchedule(id);
      res.status(200).json("schedule deleted");
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  return {
    GetScheduleByID,
    DeleteScheduleByID,
    UpdateScheduleByID,
    CreateSchedule,
  };
};

module.exports = ScheduleController();
