const { prisma } = require("../config/db");

const RecordingsRepository = () => {
  const createRecording = (data) => {
    return prisma.recordings.create({
      data,
    });
  };
  const getRecordingById = async (id) => {
    return prisma.recordings.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  };
  return {
    createRecording,
    getRecordingById,
  };
};

module.exports = RecordingsRepository();
