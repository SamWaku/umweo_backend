const activityRepository = require("../repositories/activity-repository");

const ActivityService = () => {
  const createActivity = async (data) => {
    const activity = activityRepository.CreateActivity(data);
    return activity;
  };
  const UpdateActivity = async (id, data) => {
    const activity = activityRepository.UpdateActivityByID(id, data);
    return activity;
  };
  const deleteActivity = async (id) => {
    await activityRepository.deleteActivity(id);
  };
  const getActivity = async (id) => {
    const activity = activityRepository.getActivity(id);
    return activity;
  };

  return {
    createActivity,
    UpdateActivity,
    deleteActivity,
    getActivity,
  };
};

module.exports = ActivityService();
