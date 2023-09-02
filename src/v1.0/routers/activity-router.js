const activityController = require("../controllers/activity-controller");
const ActivityRouter = require("express").Router();

ActivityRouter.post('/',activityController.createActivity);

module.exports = ActivityRouter;