//  ActivityControllerHandler->ActivityController->ServiceContainer->ActivityService->..nservice

const ServiceContainer = require('../services');
const ActivityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();
const ActivityControllerHandler = ActivityController(ServiceContainer);

// create activity i.e /activity
ActivityRouter.post("/", (req, res) => 
    ActivityControllerHandler.CreateActivity(req, res)
);

// get activity by ID i.e /activity/:id
ActivityRouter.get("/:id",(req, res) =>
    ActivityControllerHandler.GetActivityById(req, res)
);

// update activity by ID i.e /activity/:id
ActivityRouter.put("/:id", (req, res) => 
    ActivityControllerHandler.UpdateActivityById(req, res)
);

// delete activity by ID i.e /activity/:id
ActivityRouter.delete("/:id", (req, res) => 
    ActivityControllerHandler.DeleteActivityByID(req, res)
);

module.exports = ActivityRouter;
