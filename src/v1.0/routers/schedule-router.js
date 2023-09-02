const scheduleController = require("../controllers/schedule-controller");
const ScheduleRouter = require("express").Router();

// post schedule i.e /schedule
ScheduleRouter.post("/", scheduleController.CreateSchedule);

// get schedule by ID i.e /schedule/:id
ScheduleRouter.get("/:id", scheduleController.GetScheduleByID);

// update schedule by ID i.e /schedule/:id
ScheduleRouter.put("/:id", scheduleController.UpdateScheduleByID);

// delete schedule by ID i.e /schedule/:id
ScheduleRouter.delete("/:id", scheduleController.DeleteScheduleByID);

module.exports = ScheduleRouter;
