const TaskRepository = require("../repositories/task-repository");

const TaskService=()=>{
    const createTask=async(data)=>{
        const task=await TaskRepository.createTask(data);
        return task;
    }
    const getTaskById=async(id)=>{
        const task=await TaskRepository.getTaskById(id);
        return task;
    }
    const updateTask=async(data)=>{
        const updatedTask=await TaskRepository.updateTask(data);
        return updatedTask;
    }
    const deleteTask=async(id)=>{
        await TaskRepository.deleteTaskById(id);
    }
    return{
        createTask,
        getTaskById,
        updateTask,
        deleteTask
    }
}

module.exports=TaskService();