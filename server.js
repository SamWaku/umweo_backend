const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require("./src/v1.0/routers/task-router");

const app = express();

app.use(bodyParser.json());
app.use("/tasks",taskRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});