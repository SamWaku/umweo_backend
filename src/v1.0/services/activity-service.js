const activityRepository = require("../repositories/activity-repository");

const ActivityService = () => {
  const createActivity = async (data) => {
    const activity = activityRepository.CreateActivity(data);
    return activity;
  };
  const updateActivity = async (id, data) => {
    const activity = activityRepository.UpdateActivityByID(id, data);
    return activity;
  };
  const deleteActivity = async (id) => {
    await activityRepository.DeleteActivityByID(id);
  };
  const getActivityById = async (id) => {
    const activity = activityRepository.GetActivityByID(id);
    return activity;
  };

  return {
    createActivity,
    updateActivity,
    deleteActivity,
    getActivityById,
  };
};

module.exports = ActivityService();
