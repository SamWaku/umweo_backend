const activityRepository = require("../repositories/activity-repository");

const ActivityService = () => {
    // create activity
  const createActivity = async (data) => {
    const activity = activityRepository.CreateActivity(data);
    return activity;
  };

   // get activity by ID
  const getActivityById = async (id) => {
    const activity = activityRepository.GetActivityByID(id);
    return activity;
  };
  const updateActivity = async (id, data) => {
    const activity = activityRepository.UpdateActivityByID(id, data);
    return activity;
  };
  const deleteActivity = async (id) => {
    await activityRepository.DeleteActivityByID(id);
  };
  return {
    createActivity,
    updateActivity,
    deleteActivity,
    getActivityById,
  };
};

module.exports = ActivityService();
