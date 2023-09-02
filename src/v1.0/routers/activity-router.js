const activityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();

// create activity i.e /activity
ActivityRouter.post("/", activityController.CreateActivity)
;
// get activity by ID i.e /activity/:id
ActivityRouter.get("/:id", activityController.GetActivityById);

// update activity by ID i.e /activity/:id
ActivityRouter.put("/:id", activityController.UpdateActivityById);

// delete activity by ID i.e /activity/:id
ActivityRouter.delete("/:id", activityController.DeleteActivityByID);

module.exports = ActivityRouter;
