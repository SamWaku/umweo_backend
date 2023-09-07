// ScheduleControllerHandler->ScheduleController->ServiceContainer->..nservice

const ScheduleRouter = require("express").Router();
const ServiceContainer = require('../services');
const ScheduleController = require("../controllers/schedule-controller");
const ScheduleControllerHandler = ScheduleController(ServiceContainer);

// post schedule i.e /schedule
ScheduleRouter.post("/", (req, res) =>
    ScheduleControllerHandler.CreateSchedule(req, res)
);

// get schedule by ID i.e /schedule/:id
ScheduleRouter.get("/:id", (req, res) => 
    ScheduleControllerHandler.GetScheduleByID(req, res)
);

// update schedule by ID i.e /schedule/:id
ScheduleRouter.put("/:id", (req, res) => 
    ScheduleControllerHandler.UpdateScheduleByID(req, res)
);

// delete schedule by ID i.e /schedule/:id
ScheduleRouter.delete("/:id", (req, res) =>
    ScheduleControllerHandler.DeleteScheduleByID(req, res)
);

module.exports = ScheduleRouter;
