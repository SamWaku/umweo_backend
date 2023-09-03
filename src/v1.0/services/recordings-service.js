const recordingsRepository = require("../repositories/recordings-repository");

const RecordingsService=()=>{
    const CreateRecording=async(data)=>{
        const recording =recordingsRepository.createRecording(data);
        return recording;
    }
    return{
        CreateRecording
    }
}

module.exports=RecordingsService();