const activityService = require("../services/activity-service");

const ActivityController = () => {
  const createActivity = async (req, res) => {
    try {
      const data = req.body;
      const activity =await activityService.createActivity(data);
      res.status(200).json(activity);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  return {
    createActivity,
  };
};

module.exports = ActivityController();
