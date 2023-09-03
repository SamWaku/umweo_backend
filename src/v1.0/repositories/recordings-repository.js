const { prisma } = require("../config/db");

const RecordingsRepository = () => {

  // create recording
  const createRecording = (data) => {
    return prisma.recordings.create({
      data,
    });
  };

  // get recording
  const getRecordingById = async (id) => {
    return prisma.recordings.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };
  const updateRecording = async (id, data) => {
    return prisma.recordings.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  };
  const deleteRecording = async (id) => {
    return prisma.recordings.delete({
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
