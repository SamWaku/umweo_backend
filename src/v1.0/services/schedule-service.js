const ScheduleRepository = require("../repositories/schedule-repository");

const ScheduleService=()=>{
    const GetScheduleById=async(id)=>{
        const schedule=await ScheduleRepository.getScheduleById(id);
        return schedule
    }
    const CreateSchedule=async(data)=>{
        const schedule=await ScheduleRepository.createSchedule(data);
        return schedule;
    }
    const DeleteSchedule=async(id)=>{
        const schedule=await ScheduleRepository.deleteScheduleById(id);
        return schedule;
    }
    return{
        GetScheduleById,
        CreateSchedule,
        DeleteSchedule
    }
}

module.exports=ScheduleService();