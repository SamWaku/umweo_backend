const scheduleController = require("../controllers/schedule-controller");
const ScheduleRouter = require("express").Router();

// get schedule by ID i.e /schedule/:id
ScheduleRouter.get("/:id", scheduleController.GetScheduleByID);

// delete schedule by ID i.e /schedule/:id
ScheduleRouter.delete("/:id", scheduleController.DeleteScheduleByID);

// update schedule by ID i.e /schedule/:id
ScheduleRouter.put("/:id", scheduleController.UpdateScheduleByID);

// post schedule i.e /schedule
ScheduleRouter.post("/", scheduleController.CreateSchedule);

module.exports = ScheduleRouter;
