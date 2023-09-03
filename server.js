const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./src/v1.0/routers/task-router");
const ScheduleRouter = require("./src/v1.0/routers/schedule-router");
const ActivityRouter = require("./src/v1.0/routers/activity-router");
const recordingsRouter = require("./src/v1.0/routers/recordings-router");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Task router
app.use("/tasks",taskRouter);

// Schedule router
app.use('/schedule',ScheduleRouter);

// Activity router
app.use('/activity',ActivityRouter);

// Recordings router
app.use('/recordings',recordingsRouter)


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});