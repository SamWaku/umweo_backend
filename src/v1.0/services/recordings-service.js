const recordingsRepository = require("../repositories/recordings-repository");

const RecordingsService = () => {
  // create recording
  const CreateRecording = async (data) => {
    const recording = await recordingsRepository.createRecording(data);
    return recording;
  };

  // get recording by id
  const GetRecordingByID = async (id) => {
    const recording = await recordingsRepository.getRecordingById(id);
    return recording;
  };

  // update recording by id
  const UpdateRecordingByID = async (id, data) => {
    const recording = await recordingsRepository.updateRecording(id, data);
    return recording;
  };

  // delete recording by id
  const DeleteRecordingByID = async (id) => {
    await recordingsRepository.deleteRecording(id);
  };
  return {
    CreateRecording,
    GetRecordingByID,
    UpdateRecordingByID,
    DeleteRecordingByID,
  };
};

module.exports = RecordingsService;
