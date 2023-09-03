const recordingsService = require("../services/recordings-service");

const RecordingsController = () => {
  // create recording
  const createRecording = async (req, res) => {
    try {
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data!");
      }
      const recording = await recordingsService.CreateRecording(data);
      res.status(200).json(recording);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // get recording by id
  const getRecordingById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("ID doesn't exist!");
      }
      const recording = await recordingsService.GetRecordingByID(id);
      if (!recording) {
        return res.status(400).json("Recording doesn't exist!");
      }
      res.status(200).json(recording);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // update recording by id
  const updateRecordingById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("ID doesn't exist!");
      }
      const data = req.body;
      if (!data) {
        return res.status(400).json("Enter valid data!");
      }
      const recording = await recordingsService.UpdateRecordingByID(id, data);
      res.status(200).json(recording);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };

  // delete recording by id
  const deleteRecordingById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json("ID doesn't exist!");
      }
      await recordingsService.DeleteRecordingByID(id);
      res.status(200).json("Recording Deleted");
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  return {
    createRecording,
    getRecordingById,
    updateRecordingById,
    deleteRecordingById,
  };
};

module.exports = RecordingsController();
