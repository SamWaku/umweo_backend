const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require("cors");

// other factorr dependencies
const logger = require('morgan');
const fs = require('fs');
const path = require('path')

const TaskRouter = require("./src/v1.0/routers/task-router");
const ScheduleRouter = require("./src/v1.0/routers/schedule-router");
const ActivityRouter = require("./src/v1.0/routers/activity-router");
const recordingsRouter = require("./src/v1.0/routers/recordings-router");
const UserRouter = require("./src/v1.0/routers/user-router");
const TherapistRouter = require("./src/v1.0/routers/therapist-router");

const app = express();
dotenv.config();

//dependencies to keep the app stable
//log all events and store them
app.use(logger('dev'))
app.use(logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))


app.use(bodyParser.json());
app.use(cors({
  allowedHeaders: ['sessionId','Access-Control-Allow-Origin', 'Content-Type', 'master-token'],
  exposedHeaders: ['sessionId'],
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  }
));

app.get("/", (req, res) => {
  res.send("<h2>nothing!</h2>");
})

// Task router
app.use("/tasks",TaskRouter);

// Schedule router
app.use('/schedule',ScheduleRouter);

// Activity router
app.use('/activity',ActivityRouter);

// Recordings router
app.use('/recordings',recordingsRouter)

// User Router
app.use('/user',UserRouter)

app.use('/therapist',TherapistRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});