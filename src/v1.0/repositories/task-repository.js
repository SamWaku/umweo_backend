const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const TaskRepository=()=>{
    const createTask=async(data)=>{
        return prisma.tasks.create({
            data
        })
    }
    const getTasks=async()=>{
        return prisma.tasks.findMany();
    }
    const getTaskById=async(id)=>{
        return prisma.tasks.findUnique({
            where:{
                id
            }
        })
    }
    const updateTask=async(id,data)=>{
        return prisma.tasks.update({
            where:{
                id
            },
            data
        })
    }
    const deleteTaskById=async(id)=>{
        return prisma.tasks.delete({
            where:{
                id
            }
        })
    }
    return{
        createTask,
        getTasks,
        getTaskById,
        updateTask,
        deleteTaskById
    }
}

module.exports=TaskRepository();