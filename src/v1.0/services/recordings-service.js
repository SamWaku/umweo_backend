const recordingsRepository = require("../repositories/recordings-repository");

const RecordingsService = () => {
  const CreateRecording = async (data) => {
    const recording = await recordingsRepository.createRecording(data);
    return recording;
  };
  const GetRecordingByID = async (id) => {
    const recording = await recordingsRepository.getRecordingById(id);
    return recording;
  };
  const UpdateRecordingByID = async (id, data) => {
    const recording = await recordingsRepository.updateRecording(id, data);
    return recording;
  };
  const DeleteRecordingByID = async (id) => {
    await recordingsRepository.deleteRecording(id);
  };
  return {
    CreateRecording,
    GetRecordingByID,
    DeleteRecordingByID,
  };
};

module.exports = RecordingsService();
