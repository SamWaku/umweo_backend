const recordingsService = require("../services/recordings-service");

const RecordingsController=()=>{
    const createRecording=async(req,res)=>{
        try {
            const data=req.body;
            if(!data){
                return res.status(400).json("Enter valid data!");
            }
            const recording=await recordingsService.CreateRecording(data);
            res.status(200).json(recording);
        } catch (error) {
            
        }
    }
    return{
        createRecording
    }
}

module.exports=RecordingsController();