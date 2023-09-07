// RecordingsControllerHandler->RecordingsController->ServiceContainer->..nservice

const ServiceContainer = require('../services');
const RecordingsRouter = require("express").Router();
const RecordingsController = require("../controllers/recordings-controller");
const RecordingsControllerHandler = RecordingsController(ServiceContainer);

// create recording i.e /recordings/
RecordingsRouter.post("/", (req, res) => 
    RecordingsControllerHandler.createRecording(req, res)
); 

// get recording by id i.e /recordings/:id
RecordingsRouter.get("/:id", (req, res) =>
    RecordingsControllerHandler.getRecordingById(req, res)
);

// update recording by id i.e /recordings/:id
RecordingsRouter.put("/:id", (req, res) =>
    RecordingsControllerHandler.updateRecordingById(req, res)
);

// delete recording by id i.e /recordings/:id
RecordingsRouter.delete("/:id", (req, res) =>
    RecordingsControllerHandler.deleteRecordingById(erq, res)
);

module.exports = RecordingsRouter;
