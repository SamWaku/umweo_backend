// serviceContainer->activityservice->...nservice

const ActivityController = (serviceContainer) => {
  // get all activities
  const GetAllActivities = async () => {
    try {
      const activities=await serviceContainer.activityservice.GetAllActivities();
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  // create activity
  const CreateActivity = async (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data");
      }
      const activity = await serviceContainer.activityservice.createActivity(data);
      res.status(200).json(activity);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  // get activity by ID
  const GetActivityById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID");
      }
      const activity = await serviceContainer.activityservice.getActivityById(id);
      if (!activity) {
        return res.status(400).json("Activity doesn't exist");
      }
      res.status(200).json(activity);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  // update activity by ID
  const UpdateActivityById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID");
      }
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data");
      }
      const activity = await serviceContainer.activityservice.updateActivity(id, data);
      res.status(200).json(activity);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

  // delete activity by ID
  const DeleteActivityByID = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("Enter valid ID");
      }
      await serviceContainer.activityservice.deleteActivity(id);
      res.status(200).json("Activity deleted");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  return {
    CreateActivity,
    GetActivityById,
    UpdateActivityById,
    DeleteActivityByID,
    GetAllActivities,
  };
};

module.exports = ActivityController;
