const activityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();

ActivityRouter.post("/", activityController.CreateActivity);
ActivityRouter.get("/:id", activityController.GetActivityById);
ActivityRouter.put("/:id", activityController.UpdateActivityById);

module.exports = ActivityRouter;
