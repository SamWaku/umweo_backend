const { ActivityModel } = require("../models/activity-model");

const ActivityRepository = () => {

  // get all activities
  const GetAllActivities = async () => {
    return ActivityModel.findMany();
  };
  // create activity
  const CreateActivity = async (data) => {
    return ActivityModel.create({
      data,
    });
  };

  // get activity by ID
  const GetActivityByID = async (id) => {
    return ActivityModel.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  // update activity by ID
  const UpdateActivityByID = async (id, data) => {
    return ActivityModel.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };

  // delete activity by ID
  const DeleteActivityByID = async (id) => {
    return ActivityModel.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    GetAllActivities,
    CreateActivity,
    GetActivityByID,
    UpdateActivityByID,
    DeleteActivityByID,
  };
};

module.exports = ActivityRepository();
