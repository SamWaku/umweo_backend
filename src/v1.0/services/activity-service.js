const activityRepository = require("../repositories/activity-repository");

const ActivityService = () => {
  // get all activities
  const getAllActivities = async () => {
    const activities = activityRepository.GetAllActivities();
    return activities;
  };
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

  // update activity by ID
  const updateActivity = async (id, data) => {
    const activity = activityRepository.UpdateActivityByID(id, data);
    return activity;
  };

  // delete activity by ID
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

module.exports = ActivityService;
