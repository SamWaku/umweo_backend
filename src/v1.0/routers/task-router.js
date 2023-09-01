const taskController = require("../controllers/task-controller");

const router=require('express').Router();

router.post('/',taskController.CreateTask);

module.exports=router;