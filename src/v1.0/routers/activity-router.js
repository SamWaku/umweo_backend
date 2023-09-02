const activityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();

ActivityRouter.post('/',activityController.createActivity);
ActivityRouter.get('/:id',activityController.getActivityById);

module.exports = ActivityRouter;