const taskController = require("../controllers/task-controller");

const router=require('express').Router();

router.post('/',taskController.CreateTask);
router.get('/:id',taskController.GetTaskById)

module.exports=router;