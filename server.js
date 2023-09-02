const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./src/v1.0/routers/task-router");
const ScheduleRouter = require("./src/v1.0/routers/schedule-router");
const ActivityRouter = require("./src/v1.0/routers/activity-router");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/tasks",taskRouter);
app.use('/schedule',ScheduleRouter);
app.use('/activity',ActivityRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});