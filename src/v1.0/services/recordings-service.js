const recordingsRepository = require("../repositories/recordings-repository");

const RecordingsService=()=>{
    const CreateRecording=async(data)=>{
        const recording =await recordingsRepository.createRecording(data);
        return recording;
    }
    const GetRecordingByID=async(id)=>{
        const recording=await recordingsRepository.getRecordingById(id);
        return recording;
    }
    return{
        CreateRecording,
        GetRecordingByID
    }
}

module.exports=RecordingsService();