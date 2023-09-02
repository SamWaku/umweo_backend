const scheduleService = require("../services/schedule-service");

const ScheduleController=()=>{
    const GetScheduleByID=async(req,res)=>{
        try {
            const {id}=req.params;
            if(!id){
                return res.status(400).json("Enter valid ID");
            }
            const schedule=await scheduleService.GetScheduleById(id);
            res.status(200).json(schedule);
        } catch (error) {
            res.status(400).json(error)
            console.log(error);
        }
    }
    const DeleteScheduleByID=async(req,res)=>{
        try{
            const {id}=req.params;
            if(!id){
                return res.status(400).json("Invalid ID");
            }
            await scheduleService.DeleteSchedule(id);
            res.status(200).json("schedule deleted");
        }catch(error){
            res.status(400).json(error)
            console.log(error);
        }
    }
    return{
        GetScheduleByID,
        DeleteScheduleByID
    }
}

module.exports=ScheduleController();