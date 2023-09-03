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
  const updateRecord=async(id,data)=>{
    return prisma.recordings.update({
        where:{
            id
        },
        data
    })
  }
  return {
    createRecording,
    getRecordingById,
    updateRecord
  };
};

module.exports = RecordingsRepository();
