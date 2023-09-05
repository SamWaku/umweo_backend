const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require("cors");
const taskRouter = require("./src/v1.0/routers/task-router");
const ScheduleRouter = require("./src/v1.0/routers/schedule-router");
const ActivityRouter = require("./src/v1.0/routers/activity-router");
const recordingsRouter = require("./src/v1.0/routers/recordings-router");
const UserRouter = require("./src/v1.0/routers/user-router");

const app = express();
dotenv.config();

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

// User Router
app.use('/user',UserRouter)


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});