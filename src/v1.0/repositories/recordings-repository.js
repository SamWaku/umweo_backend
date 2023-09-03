const { RecordingsModel } = require("../models/recordings-model");

const RecordingsRepository = () => {
  // create recording
  const createRecording = (data) => {
    return RecordingsModel.create({
      data,
    });
  };

  // get recording by id
  const getRecordingById = async (id) => {
    return RecordingsModel.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };

  // update recording by id
  const updateRecording = async (id, data) => {
    return RecordingsModel.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };

  // delete recording by id
  const deleteRecording = async (id) => {
    return RecordingsModel.delete({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    createRecording,
    getRecordingById,
    updateRecording,
    deleteRecording,
  };
};

module.exports = RecordingsRepository();
