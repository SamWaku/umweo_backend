const recordingsController = require("../controllers/recordings-controller");

const RecordingsRouter = require("express").Router();

// create recording i.e /recordings/
RecordingsRouter.post("/", recordingsController.createRecording);

// get recording by id i.e /recordings/:id
RecordingsRouter.get("/:id", recordingsController.getRecordingById);

// update recording by id i.e /recordings/:id
RecordingsRouter.put("/:id", recordingsController.updateRecordingById);

// delete recording by id i.e /recordings/:id
RecordingsRouter.delete("/:id", recordingsController.deleteRecordingById);

module.exports = RecordingsRouter;
