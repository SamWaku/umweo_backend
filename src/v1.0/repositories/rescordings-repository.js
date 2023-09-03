const { prisma } = require("../config/db");

const RecordingsRepository=()=>{
    const getRecordingById=async(id)=>{
        return prisma.recordings.findUnique({
            where:{
                id
            }
        })
    }
    return {
        getRecordingById
    }
}

module.exports=RecordingsRepository();