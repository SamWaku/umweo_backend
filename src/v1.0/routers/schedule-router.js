const scheduleController = require("../controllers/schedule-controller");
const ScheduleRouter = require("express").Router();

ScheduleRouter.get("/:id",scheduleController.GetScheduleByID);
ScheduleRouter.delete("/:id",scheduleController.DeleteScheduleByID);
ScheduleRouter.put("/:id",scheduleController.UpdateScheduleByID);
ScheduleRouter.post("/",scheduleController.CreateSchedule);

module.exports=ScheduleRouter;