const taskController = require("../controllers/task-controller");

const router=require('express').Router();

router.get('/',taskController.CreateTask);

module.exports=router;