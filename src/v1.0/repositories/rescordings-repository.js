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
  const updateRecording = async (id, data) => {
    return prisma.recordings.update({
      where: {
        id,
      },
      data,
    });
  };
  const deleteRecording=async(id)=>{
    
  }
  return {
    createRecording,
    getRecordingById,
    updateRecording,
  };
};

module.exports = RecordingsRepository();
