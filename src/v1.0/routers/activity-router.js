const activityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();

ActivityRouter.post('/',activityController.CreateActivity);
ActivityRouter.get('/:id',activityController.GetActivityById);

module.exports = ActivityRouter;